import { createClient } from '@supabase/supabase-js';

// Lazy getter — client is created on first use at runtime, not at build time.
let _supabase: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
    if (!_supabase) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Supabase environment variables are not configured.');
        }
        _supabase = createClient(supabaseUrl, supabaseKey);
    }
    return _supabase;
}
