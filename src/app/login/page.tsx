import { Auth } from "@supabase/auth-ui-react";
import AuthPage from "../Components/Auth/Auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Login Page</h1>
      <p className="mt-4 text-center">
        Please log in to access your dashboard and manage your tasks.
      </p>
      <AuthPage />
    </main>
  );
}