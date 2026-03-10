"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export function LogoutButton({
  variant = "default",
}: {
  variant?: "default" | "destructive";
}) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`
        rounded-lg px-4 py-2 text-sm font-medium transition
        ${
          variant === "destructive"
            ? "bg-destructive text-white hover:opacity-90"
            : "bg-secondary text-secondary-foreground hover:bg-accent"
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
