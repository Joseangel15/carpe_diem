// src/utils/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function createBrowserSideClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export function createClientComponent() {
  return createClientComponentClient()
}

export function useSupabase() {
    return createClientComponentClient()
  // return createBrowserSideClient()
}