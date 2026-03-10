import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserMenu } from "@/components/user-menu";
import { UserType } from "@/app/types";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const results: UserType[] = await res.json();

  return (
    <main className="p-6 space-y-6">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Page</h1>

        <UserMenu />

        <div className="text-2xl py-6 px-2">
          <table className="border border-separate border-spacing-2 w-full">
            <thead>
              <tr>
                <th className="border p-3">Id</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Username</th>
                <th className="border p-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {results.slice(0, 10).map((u) => (
                <tr key={u.id}>
                  <td className="border p-3">{u.id}</td>
                  <td className="border p-3">
                    <Link href={`/users/${u.id}`} className="underline italic">
                      {u.name}
                    </Link>
                  </td>
                  <td className="border p-3">{u.username}</td>
                  <td className="border p-3">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
