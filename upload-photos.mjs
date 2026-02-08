import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabaseUrl = 'https://ynvpphrguqhyddlisatu.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludnBwaHJndXFoeWRkbGlzYXR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDEwMjAwMywiZXhwIjoyMDc1Njc4MDAzfQ.3g_NRwaGCkBbnyyTDlzcVf7NxGcj3HWs6S_mI5X83Wk';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const photos = [
  { path: '/home/ubuntu/upload/PXL_20260207_010503092.jpg', title: 'Sound Equipment Rack 1' },
  { path: '/home/ubuntu/upload/PXL_20260207_010456595.jpg', title: 'Sound Equipment Rack 2' },
  { path: '/home/ubuntu/upload/PXL_20260207_001014085.jpg', title: 'Mixing Console' },
  { path: '/home/ubuntu/upload/PXL_20260206_235834943.jpg', title: 'Stage Monitors' },
  { path: '/home/ubuntu/upload/PXL_20260206_235807805.jpg', title: 'Stage Setup' },
  { path: '/home/ubuntu/upload/PXL_20260206_232715339.jpg', title: 'Equipment Cases' },
  { path: '/home/ubuntu/upload/PXL_20260206_232702183.jpg', title: 'Equipment Storage' },
  { path: '/home/ubuntu/upload/PXL_20260206_230609754.jpg', title: 'Audio Rack Close-up' },
  { path: '/home/ubuntu/upload/PXL_20260206_230548690.jpg', title: 'Line Array Speaker' },
  { path: '/home/ubuntu/upload/PXL_20260206_230538556.jpg', title: 'Full Stage View' },
];

async function uploadPhotos() {
  console.log('Uploading photos to Supabase...');
  
  for (const photo of photos) {
    try {
      const fileBuffer = readFileSync(photo.path);
      const fileName = `${Date.now()}-${photo.title.replace(/[^a-z0-9]/gi, '-')}.jpg`;
      
      const { error } = await supabase.storage
        .from('gallery-photos')
        .upload(fileName, fileBuffer, {
          contentType: 'image/jpeg',
          cacheControl: '3600'
        });
      
      if (error) {
        console.error(`✗ Failed to upload ${photo.title}:`, error.message);
      } else {
        console.log(`✓ Uploaded: ${photo.title}`);
      }
    } catch (err) {
      console.error(`✗ Error uploading ${photo.title}:`, err.message);
    }
  }
  
  console.log('Upload complete!');
}

uploadPhotos();
