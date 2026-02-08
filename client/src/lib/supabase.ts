import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ynvpphrguqhyddlisatu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludnBwaHJndXFoeWRkbGlzYXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMDIwMDMsImV4cCI6MjA3NTY3ODAwM30.30fTTQs2oAc20bscbp-QMDZXi7jMVOwTneHGE1xUPzY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
