"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const HomePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (!session?.user) return;

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [session]);

  useEffect(() => {
    if (timer === 0) {
      router.push("/dashboard");
    }
  }, [timer, router]);

  if (session?.user) {
    return (
      <div className="text-3xl flex-1 flex flex-col py-6 px-2 space-y-4 border">
        <h1 className="font-bold">Already Logged In </h1>
        <p>Redirecting to dashboard in {timer} seconds</p>
      </div>
    );
  }

  return (
    <div className="text-3xl flex-1 flex flex-col py-6 px-2 space-y-4 border">
      <h1 className="font-bold"> Home Page</h1>
      <Link href={"/login"} className="underline text-rose-600 italic">
        {`->`} Login Page
      </Link>
    </div>
  );
};

export default HomePage;
