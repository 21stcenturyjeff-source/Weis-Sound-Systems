import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { X } from "lucide-react";

const PASSWORD = "Weis6944";
const BUCKET_NAME = "weis-gallery-photos";

interface Photo {
  id: string;
  title: string;
  url: string;
  created_at: string;
}

export default function Gallery() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartDistance = useRef(0);
  const panStart = useRef({ x: 0, y: 0 });

  // Load photos on mount
  useEffect(() => {
    loadPhotos();
  }, []);

  // Handle pinch-to-zoom
  useEffect(() => {
    if (!selectedPhoto || !imgRef.current) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        touchStartDistance.current = distance;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const scale = distance / touchStartDistance.current;
        setZoom((prev) => Math.min(Math.max(prev * scale, 1), 5));
        touchStartDistance.current = distance;
      } else if (e.touches.length === 1 && zoom > 1) {
        // Single finger pan when zoomed
        const touch = e.touches[0];
        const deltaX = touch.clientX - panStart.current.x;
        const deltaY = touch.clientY - panStart.current.y;
        setPan((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));
        panStart.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchStartPan = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const img = imgRef.current;
    img.addEventListener("touchstart", (e) => {
      handleTouchStart(e);
      handleTouchStartPan(e);
    });
    img.addEventListener("touchmove", handleTouchMove);

    return () => {
      img.removeEventListener("touchstart", handleTouchStart);
      img.removeEventListener("touchmove", handleTouchMove);
    };
  }, [selectedPhoto]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
        setZoom(1);
      }
    };

    if (selectedPhoto) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [selectedPhoto]);

  const loadPhotos = async () => {
    try {
      console.log('Loading photos from Supabase...');
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .list('', { sortBy: { column: 'created_at', order: 'desc' } });

      console.log('Supabase response:', { data, error });
      
      if (error) throw error;

      const photoList: Photo[] = data.map((file) => ({
        id: file.name,
        title: file.name.split('-').slice(1).join('-').replace(/\.[^/.]+$/, ""),
        url: supabase.storage.from(BUCKET_NAME).getPublicUrl(file.name).data.publicUrl,
        created_at: file.created_at || '',
      }));

      console.log('Loaded photos:', photoList.length);
      setPhotos(photoList);
    } catch (err: any) {
      console.error('Load error:', err);
      toast.error('Failed to load photos');
    } finally {
      setLoading(false);
    }
  };

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

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large (max 5MB)");
      return;
    }

    setUploading(true);
    const fileName = `${Date.now()}-${title.replace(/[^a-z0-9]/gi, '-')}.${file.name.split('.').pop()}`;

    try {
      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      toast.success("Uploaded!");
      setTitle("");
      setFile(null);
      loadPhotos();
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm("Delete this photo?")) return;

    try {
      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .remove([fileName]);

      if (error) throw error;

      toast.success("Deleted");
      loadPhotos();
    } catch (err: any) {
      toast.error(err.message || "Delete failed");
    }
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/home">
          <a className="text-cyan-400 hover:text-cyan-300 mb-4 inline-block">← Back</a>
        </Link>

        <h1 className="text-4xl font-bold mb-8">STAGE GALLERY</h1>

        {/* Gallery Grid */}
        {loading ? (
          <p className="text-center text-gray-400 py-20">Loading...</p>
        ) : photos.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No photos yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-gray-900 rounded overflow-hidden">
                <button
                  onClick={() => {
                    setSelectedPhoto(photo);
                    setZoom(1);
                    setPan({ x: 0, y: 0 });
                  }}
                  className="w-full h-64 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
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
        )}

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div 
              ref={containerRef}
              className="w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                ref={imgRef}
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="object-contain transition-transform duration-200 cursor-grab active:cursor-grabbing"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                  touchAction: "none",
                }}
              />
            </div>

            {/* Back Button at Bottom */}
            <button
              onClick={closeLightbox}
              className="absolute bottom-4 left-4 text-cyan-400 hover:text-cyan-300 text-sm font-bold"
            >
              ← Back to Gallery
            </button>

            {/* Zoom Info */}
            {zoom > 1 && (
              <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
                Zoom: {(zoom * 100).toFixed(0)}%
              </div>
            )}
          </div>
        )}

        {/* Upload Section - Now at Bottom */}
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
      </div>
    </div>
  );
}
