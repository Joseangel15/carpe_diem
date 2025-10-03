"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthPage() {
  const supabase = createClientComponentClient();

  const REDIRECT_URL = `${
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  }/dashboard`;

  return (
    <div className="flex justify-center items-center h-full bg-transparent w-full">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]} // Add social login providers if enabled in Supabase
          redirectTo={REDIRECT_URL}
          view="sign_in" // Start with the sign-in view
          localization={{
            variables: {
              sign_in: { email_label: "Email Address" }, // Example custom text
            },
          }}
          theme="default" // Use 'dark' if your app has a dark mode
        />
      </div>
    </div>
  );
}
