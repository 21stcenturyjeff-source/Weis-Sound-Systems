import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2, Upload, Trash2, Lock } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const GALLERY_PASSWORD = "Weis6944";

interface GalleryPhoto {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  uploadedBy: number;
}

export default function Gallery() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("gallery_auth") === "true";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  // Load gallery photos
  const { data: photos = [], isLoading, refetch } = trpc.gallery.list.useQuery();

  // Upload mutation
  const uploadMutation = trpc.gallery.upload.useMutation({
    onSuccess: () => {
      toast.success("Photo uploaded successfully!");
      setTitle("");
      setDescription("");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsDialogOpen(false);
      refetch();
    },
    onError: (error) => {
      toast.error(`Upload failed: ${error.message}`);
    },
  });

  // Delete mutation
  const deleteMutation = trpc.gallery.delete.useMutation({
    onSuccess: () => {
      toast.success("Photo deleted successfully");
      refetch();
    },
    onError: (error) => {
      toast.error(`Delete failed: ${error.message}`);
    },
  });

  const handlePasswordSubmit = () => {
    if (passwordInput === GALLERY_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("gallery_auth", "true");
      setShowPasswordPrompt(false);
      setPasswordInput("");
      setIsDialogOpen(true);
      toast.success("Authentication successful");
    } else {
      toast.error("Incorrect password");
      setPasswordInput("");
    }
  };

  const handleUploadClick = () => {
    if (!isAuthenticated) {
      setShowPasswordPrompt(true);
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        e.target.value = "";
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error("Please select an image file");
        e.target.value = "";
        return;
      }
      
      setSelectedFile(file);
      toast.success(`Selected: ${file.name}`);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim()) {
      toast.error("Please provide a title and select an image");
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = (e.target?.result as string)?.split(",")[1];
        if (!base64) {
          toast.error("Failed to read file");
          setIsUploading(false);
          return;
        }

        try {
          await uploadMutation.mutateAsync({
            title: title.trim(),
            description: description.trim() || undefined,
            imageBase64: base64,
            filename: selectedFile.name,
          });
        } catch (error) {
          console.error("Upload error:", error);
        } finally {
          setIsUploading(false);
        }
      };
      reader.onerror = () => {
        toast.error("Failed to read file");
        setIsUploading(false);
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error("Upload failed:", error);
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this photo?")) return;
    await deleteMutation.mutateAsync({ id });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container py-12">
        <Link href="/home">
          <a className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">← Back to Home</a>
        </Link>
        
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">STAGE GALLERY</h1>
            <p className="text-gray-400">Showcase your performances and stage setups</p>
          </div>
          
          <Button 
            onClick={handleUploadClick}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
          >
            <Upload className="mr-2 w-4 h-4" />
            Upload Photo
          </Button>
        </div>

        {/* Password Prompt Dialog */}
        <Dialog open={showPasswordPrompt} onOpenChange={setShowPasswordPrompt}>
          <DialogContent className="bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Enter Password
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Enter the gallery password to upload photos</p>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
                placeholder="Password"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                autoFocus
              />
              <Button
                onClick={handlePasswordSubmit}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
              >
                Submit
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Upload Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle>Upload Stage Photo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Pittsburgh Concert Setup"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Optional details about the setup or event"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Photo * (Max 5MB)</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-black hover:file:bg-cyan-600"
                />
                {selectedFile && (
                  <p className="text-sm text-cyan-400 mt-2">{selectedFile.name}</p>
                )}
              </div>
              
              <Button
                onClick={handleUpload}
                disabled={isUploading || !selectedFile || !title.trim()}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  "Upload Photo"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-4">No photos yet. Be the first to upload!</p>
            <Button 
              onClick={handleUploadClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
            >
              Upload First Photo
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="bg-gray-900 border-gray-700 overflow-hidden hover:border-cyan-500 transition">
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{photo.title}</h3>
                  {photo.description && (
                    <p className="text-gray-400 text-sm mb-4">{photo.description}</p>
                  )}
                  {isAuthenticated && (
                    <Button
                      onClick={() => handleDelete(photo.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-400 hover:text-red-300 hover:bg-red-950"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
