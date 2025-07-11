const { createClient } = require("@supabase/supabase-js");

exports.handler = async function (event, context) {
  // Configuration Supabase
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  try {
    const { data: members, error } = await supabase.from("members").select("*");

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify(members),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
