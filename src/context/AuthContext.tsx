'use client';

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (token?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newAccessToken = Cookies.get('access');
      if (newAccessToken !== token) {
        setToken(newAccessToken || '');
      }
    }, 1000); // Che

    return () => clearInterval(interval);
  }, [token]);

  const login = (newToken?: string) => {
    if (newToken) {
      setToken(newToken);
      Cookies.set('access', newToken);
    } else logout();
  };

  const logout = () => {
    Cookies.remove('access');
    setToken('');
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
