import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ynvpphrguqhyddlisatu.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludnBwaHJndXFoeWRkbGlzYXR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDEwMjAwMywiZXhwIjoyMDc1Njc4MDAzfQ.3g_NRwaGCkBbnyyTDlzcVf7NxGcj3HWs6S_mI5X83Wk';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupStorage() {
  console.log('Setting up Supabase storage bucket...');
  
  // Create bucket
  const { data: bucket, error: bucketError } = await supabase.storage.createBucket('gallery-photos', {
    public: true,
    fileSizeLimit: 5242880, // 5MB
    allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  });

  if (bucketError) {
    if (bucketError.message.includes('already exists')) {
      console.log('✓ Bucket already exists');
    } else {
      console.error('Error creating bucket:', bucketError);
      process.exit(1);
    }
  } else {
    console.log('✓ Bucket created successfully');
  }

  console.log('✓ Setup complete!');
}

setupStorage();
