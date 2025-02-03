"use client";

import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function LoginStatus() {
  const { isAuthenticated } = useAuth();
  return (
    <div
      className={`w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold ${
        isAuthenticated
          ? "bg-green-400 text-green-900"
          : "bg-red-400 text-red-900"
      }`}
    >
      {isAuthenticated ? "User is signed in" : "User is not signed in"}
    </div>
  );
}
