"use client";

import { useSession } from "next-auth/react";
import { LogoutButton } from "./logout-button";

export function UserMenu() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div className="flex items-center justify-between bg-secondary rounded-lg px-4 py-3">
      <div>
        <p className="text-sm font-medium">{session.user.name}</p>
        <p className="text-xs text-muted-foreground">{session.user.email}</p>
      </div>

      <LogoutButton variant="destructive" />
    </div>
  );
}
