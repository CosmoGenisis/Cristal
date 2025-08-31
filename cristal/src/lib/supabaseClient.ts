import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbolkbtfpatxmtgedgbb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRib2xrYnRmcGF0eG10Z2VkZ2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDgzMDcsImV4cCI6MjA3MjIyNDMwN30.5kyOGqx1mH4QGYV1JUUK9HMXmeClhILALWJwmNtZTRw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
