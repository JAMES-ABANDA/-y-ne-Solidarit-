// Configuration Supabase
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://usmqthevpanpzscwkjgx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzbXF0aGV2cGFucHpzY3dramd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMjUwNzIsImV4cCI6MjA2NzgwMTA3Mn0.n2xmvuozFSY4OE0K3a-uEj2yEQgW35ziM19kknsGBq4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
