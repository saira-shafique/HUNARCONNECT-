"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

export default function LayoutController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";

  const authPaths = ["/login", "/register", "/forgot-password"];

  const isAuthRoute = authPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  return (
    <>
      {!isAuthRoute && <Header />}
      {children}
      {!isAuthRoute && <Footer />}
    </>
  );
}
