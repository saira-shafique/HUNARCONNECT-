"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Role = "customer" | "artisan" | null;

interface AuthState {
  loggedIn: boolean;
  role: Role;
}

interface AuthContextValue {
  authState: AuthState;
  loginAs: (role: Exclude<Role, null>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({ loggedIn: false, role: null });

  useEffect(() => {
    const stored = window.localStorage.getItem("hunarconnect-auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AuthState;
        if (parsed?.loggedIn && (parsed.role === "customer" || parsed.role === "artisan")) {
          setAuthState(parsed);
        }
      } catch {
        // ignore invalid cache
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hunarconnect-auth", JSON.stringify(authState));
  }, [authState]);

  const loginAs = (role: Exclude<Role, null>) => {
    setAuthState({ loggedIn: true, role });
  };

  const logout = () => {
    setAuthState({ loggedIn: false, role: null });
  };

  const value = useMemo(() => ({ authState, loginAs, logout }), [authState]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
