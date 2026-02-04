import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { Camera, Loader2 } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption: string | null;
}

const GallerySection = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('id, url, caption')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setImages(data);
      }
      setLoading(false);
    };

    fetchImages();
  }, []);

  // Don't render section if no images
  if (!loading && images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-forest-light to-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="h-4 w-4" />
            Our Moments
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses of joy, learning, and growth at Vrindavan Early Learning Centre
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* Masonry Grid */}
        {!loading && images.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >
                <div
                  className="relative group rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-medium transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.caption || 'School gallery image'}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-background text-sm font-medium">
                        {image.caption}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || 'Gallery image'}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-background p-4 rounded-b-lg text-center">
                  {selectedImage.caption}
                </div>
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-background hover:text-secondary transition-colors text-lg"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
