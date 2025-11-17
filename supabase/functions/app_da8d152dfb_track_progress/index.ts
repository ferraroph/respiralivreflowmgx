import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  console.log(`[${requestId}] ${req.method} ${req.url}`);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    let body = null;
    try {
      body = await req.json();
    } catch (error) {
      console.log(`[${requestId}] No JSON body provided`);
    }

    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    switch (req.method) {
      case 'GET':
        if (action === 'get_progress') {
          const userId = url.searchParams.get('user_id');
          if (!userId) {
            return new Response(
              JSON.stringify({ error: 'User ID required' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          const { data: progress, error } = await supabase
            .from('app_da8d152dfb_user_progress')
            .select('*')
            .eq('user_id', userId)
            .single();

          if (error && error.code !== 'PGRST116') {
            console.error(`[${requestId}] Error fetching progress:`, error);
            return new Response(
              JSON.stringify({ error: 'Failed to fetch progress' }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          return new Response(
            JSON.stringify({ progress: progress || null }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        break;

      case 'POST':
        if (action === 'update_progress') {
          const { user_id, current_step, total_score, character_data, progress_data } = body || {};
          
          if (!user_id) {
            return new Response(
              JSON.stringify({ error: 'User ID required' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          const { data, error } = await supabase
            .from('app_da8d152dfb_user_progress')
            .upsert({
              user_id,
              current_step: current_step || 1,
              total_score: total_score || 0,
              character_data: character_data || {},
              progress_data: progress_data || {},
              last_accessed: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }, { onConflict: 'user_id' })
            .select()
            .single();

          if (error) {
            console.error(`[${requestId}] Error updating progress:`, error);
            return new Response(
              JSON.stringify({ error: 'Failed to update progress' }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          console.log(`[${requestId}] Progress updated for user ${user_id}`);
          return new Response(
            JSON.stringify({ success: true, progress: data }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        if (action === 'save_lead') {
          const leadData = body || {};
          
          const { data, error } = await supabase
            .from('app_da8d152dfb_leads')
            .insert({
              ...leadData,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            })
            .select()
            .single();

          if (error) {
            console.error(`[${requestId}] Error saving lead:`, error);
            return new Response(
              JSON.stringify({ error: 'Failed to save lead' }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          console.log(`[${requestId}] Lead saved with ID ${data.id}`);
          return new Response(
            JSON.stringify({ success: true, lead: data }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        if (action === 'save_challenge') {
          const { user_id, challenge_step, challenge_type, score, completion_time, performance_data } = body || {};
          
          if (!user_id || !challenge_step || !challenge_type) {
            return new Response(
              JSON.stringify({ error: 'Missing required fields' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          const { data, error } = await supabase
            .from('app_da8d152dfb_challenge_completions')
            .insert({
              user_id,
              challenge_step,
              challenge_type,
              score: score || 0,
              completion_time,
              performance_data: performance_data || {},
              completed_at: new Date().toISOString()
            })
            .select()
            .single();

          if (error) {
            console.error(`[${requestId}] Error saving challenge:`, error);
            return new Response(
              JSON.stringify({ error: 'Failed to save challenge' }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          console.log(`[${requestId}] Challenge completion saved for user ${user_id}`);
          return new Response(
            JSON.stringify({ success: true, completion: data }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Method not allowed' }),
          { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error(`[${requestId}] Unexpected error:`, error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});