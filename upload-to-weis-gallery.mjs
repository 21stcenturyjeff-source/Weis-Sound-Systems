import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  'https://lpaifpthwavidsnslbhl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYWlmcHRod2F2aWRzbnNsYmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTIxNDEsImV4cCI6MjA3ODM4ODE0MX0.l3YPYUF0Tr9QRrY8TjkIv9HB_nnPZDsMRZJ3HMJv3A4'
);

const photos = [
  { path: '/home/ubuntu/upload/PXL_20260207_010503092.jpg', title: 'Sound-Equipment-Rack-1' },
  { path: '/home/ubuntu/upload/PXL_20260207_010456595.jpg', title: 'Sound-Equipment-Rack-2' },
  { path: '/home/ubuntu/upload/PXL_20260207_001014085.jpg', title: 'Mixing-Console' },
  { path: '/home/ubuntu/upload/PXL_20260206_235834943.jpg', title: 'Stage-Monitors' },
  { path: '/home/ubuntu/upload/PXL_20260206_235807805.jpg', title: 'Stage-Setup' },
  { path: '/home/ubuntu/upload/PXL_20260206_232715339.jpg', title: 'Equipment-Cases' },
  { path: '/home/ubuntu/upload/PXL_20260206_232702183.jpg', title: 'Equipment-Storage' },
  { path: '/home/ubuntu/upload/PXL_20260206_230609754.jpg', title: 'Audio-Rack-Close-up' },
  { path: '/home/ubuntu/upload/PXL_20260206_230548690.jpg', title: 'Line-Array-Speaker' },
  { path: '/home/ubuntu/upload/PXL_20260206_230538556.jpg', title: 'Full-Stage-View' },
];

console.log('Uploading photos to weis-gallery-photos bucket...\n');

for (const photo of photos) {
  const fileBuffer = readFileSync(photo.path);
  const fileName = `${Date.now()}-${photo.title}.jpg`;
  
  const { data, error } = await supabase.storage
    .from('weis-gallery-photos')
    .upload(fileName, fileBuffer, {
      contentType: 'image/jpeg',
      upsert: false
    });

  if (error) {
    console.error(`❌ Failed to upload ${photo.title}:`, error.message);
  } else {
    console.log(`✅ Uploaded: ${photo.title} as ${fileName}`);
  }
}

console.log('\n✅ All photos uploaded!');
