'use client';

import LoginStatus from '@/components/LoginStatus';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  function handleWebviewCheck() {
    // @ts-expect-error ReactNativeWebView is not part of window object but we have it here
    if (window.ReactNativeWebView)
      // @ts-expect-error ReactNativeWebView is not part of window object but we have it here
      window?.ReactNativeWebView?.postMessage('LOGIN');
    else router.push('/login');
  }

  function handleOpenApp() {
    const deepLinkUrl = `sendByPass://main?message=redirected`;
    window.location.href = deepLinkUrl;
  }

  return (
    <div className="p-4">
      <LoginStatus />
      <div
        onClick={handleWebviewCheck}
        className="w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold bg-blue-400 text-blue-900 mt-7"
      >
        Sign In
      </div>
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
      <div
        onClick={handleOpenApp}
        className="w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold bg-teal-400 text-teal-900 mt-7"
      >
        open app
      </div>
    </div>
  );
}
