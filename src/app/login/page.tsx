"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { UserMenu } from "@/components/user-menu";
import { SignInButton } from "@/components/sign-in-button";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main className=" p-6">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-card">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Login Page</h1>
        </div>

        {!session ? (
          <SignInButton />
        ) : (
          <div className="space-y-4">
            <UserMenu />
            <Link
              href="/dashboard"
              className="block w-full py-2 text-center font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
