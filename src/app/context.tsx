"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

const userName = process.env.NEXT_PUBLIC_CDSSUMMIT_USERNAME;
const cdsPassword = process.env.NEXT_PUBLIC_SUPABASE_PASSWORD;

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token_cds");
      if (token) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === userName && password === cdsPassword) {
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_token_cds", "my_admin_token_1239494949");
      }
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_token_cds");
    }
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
