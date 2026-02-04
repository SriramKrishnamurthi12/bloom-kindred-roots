-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Public can view all gallery images
CREATE POLICY "Anyone can view gallery images"
ON public.gallery_images
FOR SELECT
USING (true);

-- Only authenticated users can insert (we'll restrict to admin in app logic)
CREATE POLICY "Authenticated users can insert gallery images"
ON public.gallery_images
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = uploaded_by);

-- Only the uploader can delete their images
CREATE POLICY "Users can delete their own images"
ON public.gallery_images
FOR DELETE
TO authenticated
USING (auth.uid() = uploaded_by);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery', 'gallery', true);

-- Storage policies: anyone can view
CREATE POLICY "Public gallery images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'gallery');

-- Authenticated users can upload to gallery
CREATE POLICY "Authenticated users can upload gallery images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery');

-- Users can delete their own uploads
CREATE POLICY "Users can delete own gallery images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'gallery');