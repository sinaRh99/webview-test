"use client";

import LoginStatus from "@/components/LoginStatus";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <LoginStatus />
      <Link
        href="/login"
        className="w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold bg-blue-400 text-blue-900 mt-7"
      >
        Sign In
      </Link>
      <Link
        href="/profile"
        className="w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold bg-violet-400 text-violet-900 mt-7"
      >
        Profile
      </Link>
    </div>
  );
}
