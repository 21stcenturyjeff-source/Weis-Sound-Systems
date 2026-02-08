-- Fix Supabase Storage Security for gallery-photos bucket
-- Run this in your Supabase SQL Editor: https://ynvpphrguqhyddlisatu.supabase.co

-- Allow anyone to upload files to the gallery-photos bucket
DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'gallery-photos');

-- Allow anyone to read files from the gallery-photos bucket
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery-photos');

-- Allow anyone to delete files from the gallery-photos bucket (for the delete button)
DROP POLICY IF EXISTS "Allow public deletes" ON storage.objects;
CREATE POLICY "Allow public deletes"
ON storage.objects FOR DELETE
USING (bucket_id = 'gallery-photos');

SELECT 'Gallery storage policies updated!' as status;
