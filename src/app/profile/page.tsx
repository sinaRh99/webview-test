"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginStatus from "@/components/LoginStatus";
import Link from "next/link";

function Profile() {
  const { token } = useAuth();
  const [profileData, setProfileData] = useState<{ email: string } | null>(
    null
  );
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api-dev.sendbypass.com/v1/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfileData(response.data);
        setIsLoading(false);
      } catch {
        setError(true);
        setIsLoading(false);
      }
    };
    getProfile();
  }, [token]);

  return (
    <div className="p-4">
      <LoginStatus />
      <div className="text-center text-xl font-black text-purple-500 mt-7">
        {isLoading ? "Loading..." : profileData?.email}
      </div>
      {error && (
        <div className="text-center text-xl font-black text-rose-500 mt-7">
          error : {token}
        </div>
      )}
      <Link
        href="/"
        className="w-full h-16 rounded-xl flex items-center justify-center text-xl font-bold bg-violet-400 text-violet-900 mt-7"
      >
        Back to home
      </Link>
    </div>
  );
}

export default Profile;
