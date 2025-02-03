"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const { isAuthenticated, token } = useAuth();
  const [profileData, setProfileData] = useState<{ email: string } | null>(
    null
  );

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(
        "https://api-dev.sendbypass.com/v1/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data);
    };
    getProfile();
  }, []);

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
      <div className="text-center text-3xl font-black text-purple-500">
        {profileData?.email}
      </div>
    </div>
  );
}

export default Profile;
