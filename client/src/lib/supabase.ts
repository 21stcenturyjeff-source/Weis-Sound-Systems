import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lpaifpthwavidsnslbhl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYWlmcHRod2F2aWRzbnNsYmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTIxNDEsImV4cCI6MjA3ODM4ODE0MX0.l3YPYUF0Tr9QRrY8TjkIv9HB_nnPZDsMRZJ3HMJv3A4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
