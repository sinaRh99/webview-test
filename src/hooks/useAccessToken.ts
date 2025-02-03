import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState(Cookies.get("access") || "");
  const [refreshToken, setRefreshToken] = useState(
    Cookies.get("refresh") || ""
  );
  const { login } = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      const newAccessToken = Cookies.get("access");
      const newRefreshToken = Cookies.get("refresh");
      if (newAccessToken !== accessToken) {
        setAccessToken(newAccessToken || "");
        login(newAccessToken);
      }
      if (newRefreshToken !== refreshToken)
        setRefreshToken(newRefreshToken || "");
    }, 1000); // Check every second (adjust as needed)

    return () => clearInterval(interval);
  }, [accessToken, refreshToken]);

  return {
    access: accessToken,
    refresh: refreshToken,
  };
};

export default useAccessToken;
