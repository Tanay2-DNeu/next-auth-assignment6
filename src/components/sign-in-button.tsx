"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="w-full rounded-lg bg-primary text-primary-foreground py-2 font-medium hover:opacity-90 transition active:scale-[0.98]"
    >
      Sign in with Google
    </button>
  );
}
