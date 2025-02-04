"use client";

import LoginStatus from "@/components/LoginStatus";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const { logout } = useAuth();

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
      <div
        onClick={logout}
        className="w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold bg-amber-400 text-amber-900 mt-7"
      >
        sign out
      </div>
    </div>
  );
}
