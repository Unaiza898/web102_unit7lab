import { createClient } from '@supabase/supabase-js'
const URL = "your key";
const API_KEY = "your key";
export const supabase = createClient(URL, API_KEY);

