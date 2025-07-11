// Configuration Supabase
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://votre-id-supabase.supabase.co";
const supabaseKey = "votre-cle-api-supabase";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
