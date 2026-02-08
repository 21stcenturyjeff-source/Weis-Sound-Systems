import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ynvpphrguqhyddlisatu.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludnBwaHJndXFoeWRkbGlzYXR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDEwMjAwMywiZXhwIjoyMDc1Njc4MDAzfQ.3g_NRwaGCkBbnyyTDlzcVf7NxGcj3HWs6S_mI5X83Wk';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const { data, error } = await supabase.storage.from('gallery-photos').list();

if (error) {
  console.error('Error:', error);
} else {
  console.log(`Found ${data.length} files in Supabase storage:`);
  data.forEach(file => console.log(`- ${file.name}`));
}
