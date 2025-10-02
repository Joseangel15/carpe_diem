// src/utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Use a factory function to create a new client for each request
// to ensure no shared state between users.
export async function createServerSideClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        async getAll() {
          return (await cookieStore).getAll()
        },
        // This is necessary for Supabase's SSR flow to refresh sessions
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(async ({ name, value, options }) =>
              (await cookieStore).set(name, value, options)
            )
          } catch (error) {
            // The `setAll` method was called from a Server Component.
            // This can happen if you try to sign out from a Server Component.
          }
        },
      },
    }
  )
}