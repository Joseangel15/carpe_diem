"use client";

import Link from "next/link";
import { useUser, useSessionContext } from "@supabase/auth-helpers-react";

export default function Header() {
  const user = useUser();
  const { isLoading } = useSessionContext();
  // 1. Get the session (user is extracted from secure cookies)

  if (isLoading) {
    // Show a minimal header or a spinner while the session is being fetched
    return (
      <header>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">...</div>
          <div className="flex-none">Loading Auth...</div>
        </div>
      </header>
    );
  }

  const userEmail = user?.email;
  console.log("User email:", userEmail);

  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            CARPE DIEM
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                <li><Link href={"/dashboard"}>{userEmail}</Link></li>
                {/* Add a Sign Out Button here */}
              </>
            ) : (
              <li><Link href={"/login"}>Login</Link></li>
            )}
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"/link1"}>Link 1</Link>
                  </li>
                  <li>
                    <Link href={"/link2"}>Link 2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
