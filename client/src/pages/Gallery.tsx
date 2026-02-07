import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, Upload, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function Gallery() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { data: photos, isLoading, refetch } = trpc.gallery.list.useQuery();
  const uploadMutation = trpc.gallery.upload.useMutation();
  const deleteMutation = trpc.gallery.delete.useMutation();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title) {
      alert("Please select a file and enter a title");
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = (e.target?.result as string).split(',')[1];
        await uploadMutation.mutateAsync({
          title,
          description,
          imageBase64: base64,
          filename: selectedFile.name,
        });
        setTitle("");
        setDescription("");
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        refetch();
      };
      reader.readAsDataURL(selectedFile);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this photo?")) {
      await deleteMutation.mutateAsync({ id });
      refetch();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/home" className="text-sm text-white/60 hover:text-[#00ffff] mb-4 inline-block">
                ← Back to Home
              </Link>
              <h1 className="text-5xl font-bold mb-2">STAGE GALLERY</h1>
              <p className="text-white/70">Showcase your performances and stage setups</p>
            </div>
            {user && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#00ffff] text-black hover:bg-[#00ffff]/90">
                    <Upload className="mr-2" size={20} />
                    Upload Photo
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  <DialogHeader>
                    <DialogTitle>Upload Stage Photo</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title *</label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Pittsburgh Concert Setup"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add details about the event or setup..."
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Photo *</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="w-full"
                      />
                      {selectedFile && (
                        <p className="text-sm text-white/60 mt-2">Selected: {selectedFile.name}</p>
                      )}
                    </div>
                    <Button
                      onClick={handleUpload}
                      disabled={isUploading}
                      className="w-full bg-[#00ffff] text-black hover:bg-[#00ffff]/90"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Uploading...
                        </>
                      ) : (
                        "Upload Photo"
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-[#00ffff]" size={40} />
          </div>
        ) : photos && photos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="bg-card border-border overflow-hidden hover:border-[#00ffff] transition-colors group">
                <div className="relative overflow-hidden h-64 bg-black">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {user && (
                    <button
                      onClick={() => handleDelete(photo.id)}
                      className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#00ffff] mb-2">{photo.title}</h3>
                  {photo.description && (
                    <p className="text-white/70 text-sm mb-3">{photo.description}</p>
                  )}
                  <p className="text-white/50 text-xs">
                    {new Date(photo.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg mb-6">No photos yet. Be the first to upload!</p>
            {user && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#00ffff] text-black hover:bg-[#00ffff]/90">
                    <Upload className="mr-2" size={20} />
                    Upload First Photo
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  <DialogHeader>
                    <DialogTitle>Upload Stage Photo</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title *</label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Pittsburgh Concert Setup"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add details about the event or setup..."
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Photo *</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="w-full"
                      />
                      {selectedFile && (
                        <p className="text-sm text-white/60 mt-2">Selected: {selectedFile.name}</p>
                      )}
                    </div>
                    <Button
                      onClick={handleUpload}
                      disabled={isUploading}
                      className="w-full bg-[#00ffff] text-black hover:bg-[#00ffff]/90"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Uploading...
                        </>
                      ) : (
                        "Upload Photo"
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
