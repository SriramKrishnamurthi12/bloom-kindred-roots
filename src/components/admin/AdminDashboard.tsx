import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, Trash2, LogOut, Image, Loader2 } from 'lucide-react';
import schoolLogo from '@/assets/school-logo.jpg';

interface GalleryImage {
  id: string;
  url: string;
  storage_path: string;
  caption: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [caption, setCaption] = useState('');

  const fetchImages = useCallback(async () => {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error loading images",
        description: error.message,
        variant: "destructive"
      });
    } else {
      setImages(data || []);
    }
    setLoading(false);
  }, [toast]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    for (const file of Array.from(files)) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${user?.id}/${fileName}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, file);

      if (uploadError) {
        toast({
          title: "Upload failed",
          description: uploadError.message,
          variant: "destructive"
        });
        continue;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);

      // Insert into database
      const { error: dbError } = await supabase
        .from('gallery_images')
        .insert({
          url: urlData.publicUrl,
          storage_path: filePath,
          caption: caption || null,
          uploaded_by: user?.id
        });

      if (dbError) {
        toast({
          title: "Database error",
          description: dbError.message,
          variant: "destructive"
        });
      }
    }

    setUploading(false);
    setCaption('');
    fetchImages();
    toast({
      title: "Upload complete",
      description: "Your images have been added to the gallery.",
    });

    // Reset file input
    e.target.value = '';
  };

  const handleDelete = async (image: GalleryImage) => {
    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('gallery')
      .remove([image.storage_path]);

    if (storageError) {
      toast({
        title: "Delete failed",
        description: storageError.message,
        variant: "destructive"
      });
      return;
    }

    // Delete from database
    const { error: dbError } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', image.id);

    if (dbError) {
      toast({
        title: "Database error",
        description: dbError.message,
        variant: "destructive"
      });
      return;
    }

    fetchImages();
    toast({
      title: "Image deleted",
      description: "The image has been removed from the gallery.",
    });
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container-custom mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={schoolLogo} 
              alt="Vrindavan" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-heading text-lg text-primary">Gallery Admin</h1>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors mr-4">
              View Website
            </a>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container-custom mx-auto px-4 py-8">
        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload Images
            </CardTitle>
            <CardDescription>
              Add new photos to the school gallery. Supported formats: JPG, PNG, WEBP
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="caption">Caption (optional)</Label>
                <Input
                  id="caption"
                  placeholder="e.g., Annual Day Celebration 2024"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="images">Select Images</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleUpload}
                    disabled={uploading}
                    className="cursor-pointer"
                  />
                  {uploading && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Uploading...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="h-5 w-5 text-primary" />
              Gallery Images ({images.length})
            </CardTitle>
            <CardDescription>
              Manage your uploaded photos. Click the trash icon to remove an image.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No images uploaded yet.</p>
                <p className="text-sm">Upload your first image above!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative group rounded-lg overflow-hidden border border-border">
                    <img
                      src={image.url}
                      alt={image.caption || 'Gallery image'}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(image)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-background text-xs p-2 truncate">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
