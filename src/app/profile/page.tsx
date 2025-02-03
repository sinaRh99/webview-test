"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginStatus from "@/components/LoginStatus";

function Profile() {
  const { token } = useAuth();
  const [profileData, setProfileData] = useState<{ email: string } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
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
    };
    getProfile();
  }, [token]);

  return (
    <div className="p-4">
      <LoginStatus />

      <div className="text-center text-3xl font-black text-purple-500">
        {isLoading ? "Loading..." : profileData?.email}
      </div>
    </div>
  );
}

export default Profile;
