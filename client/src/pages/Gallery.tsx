import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const PASSWORD = "Weis6944";

export default function Gallery() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data: photos = [], refetch } = trpc.gallery.list.useQuery();
  const uploadMutation = trpc.gallery.upload.useMutation();
  const deleteMutation = trpc.gallery.delete.useMutation();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuth(true);
      toast.success("Authenticated");
    } else {
      toast.error("Wrong password");
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string)?.split(",")[1];
      try {
        await uploadMutation.mutateAsync({
          title,
          imageBase64: base64,
          filename: file.name,
        });
        toast.success("Uploaded!");
        setTitle("");
        setFile(null);
        refetch();
      } catch (err: any) {
        toast.error(err.message);
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete?")) return;
    try {
      await deleteMutation.mutateAsync({ id });
      toast.success("Deleted");
      refetch();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/home">
          <a className="text-cyan-400 hover:text-cyan-300 mb-4 inline-block">← Back</a>
        </Link>

        <h1 className="text-4xl font-bold mb-8">STAGE GALLERY</h1>

        {/* Upload Section */}
        {!isAuth ? (
          <form onSubmit={handleAuth} className="mb-8 bg-gray-900 p-6 rounded">
            <h2 className="text-xl mb-4">Upload Photo (Password Required)</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white mb-4"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-600"
            >
              Unlock Upload
            </button>
          </form>
        ) : (
          <form onSubmit={handleUpload} className="mb-8 bg-gray-900 p-6 rounded">
            <h2 className="text-xl mb-4">Upload Photo</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Photo title"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white mb-4"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full text-white mb-4"
              required
            />
            <button
              type="submit"
              disabled={uploading}
              className="px-6 py-2 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-600 disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </form>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-gray-900 rounded overflow-hidden">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{photo.title}</h3>
                {isAuth && (
                  <button
                    onClick={() => handleDelete(photo.id)}
                    className="mt-2 text-red-400 hover:text-red-300 text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {photos.length === 0 && (
          <p className="text-center text-gray-400 py-20">No photos yet</p>
        )}
      </div>
    </div>
  );
}
