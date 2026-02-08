-- Setup for weis-gallery-photos bucket in 21st Dev Labs Supabase
-- Run this in Supabase SQL Editor: https://lpaifpthwavidsnslbhl.supabase.co

-- Create the weis-gallery-photos bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('weis-gallery-photos', 'weis-gallery-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload files to the weis-gallery-photos bucket
DROP POLICY IF EXISTS "Allow public uploads to weis-gallery" ON storage.objects;
CREATE POLICY "Allow public uploads to weis-gallery"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'weis-gallery-photos');

-- Allow anyone to read files from the weis-gallery-photos bucket
DROP POLICY IF EXISTS "Allow public reads from weis-gallery" ON storage.objects;
CREATE POLICY "Allow public reads from weis-gallery"
ON storage.objects FOR SELECT
USING (bucket_id = 'weis-gallery-photos');

-- Allow anyone to delete files from the weis-gallery-photos bucket
DROP POLICY IF EXISTS "Allow public deletes from weis-gallery" ON storage.objects;
CREATE POLICY "Allow public deletes from weis-gallery"
ON storage.objects FOR DELETE
USING (bucket_id = 'weis-gallery-photos');

SELECT 'weis-gallery-photos bucket created and policies set!' as status;
