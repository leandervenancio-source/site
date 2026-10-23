import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://kyhbbwbblxgncfhkqttq.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_JFxa7YneZ2VHbI3rInryYg_RsmYv-nf';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

