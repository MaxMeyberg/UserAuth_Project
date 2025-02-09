import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vntfplcobcgqszwixgpu.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZudGZwbGNvYmNncXN6d2l4Z3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNTM5MjQsImV4cCI6MjA1NDYyOTkyNH0.WO8CBkAeQWtsIPEGXFyx3sw-jAzyax7ADFmj99qqZM0";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);