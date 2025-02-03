"use client";

import { useAccessToken } from "@/hooks";

export default function Home() {
  const { access, refresh } = useAccessToken();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border-b-2 border-red-400 py-4 text-orange-400">
        access: {access}
      </div>
      <div className="border-b-2py-4 text-sky-400">refresh: {refresh}</div>
    </div>
  );
}
