"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="p-4">
      <div
        className={`w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold ${
          isAuthenticated
            ? "bg-green-400 text-green-900"
            : "bg-red-400 text-red-900"
        }`}
      >
        {isAuthenticated ? "User is signed in" : "User is not signed in"}
      </div>

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
