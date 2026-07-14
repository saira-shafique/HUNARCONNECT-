"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const navigation = [
  { name: "Dashboard", href: "/artisan/dashboard" },
  { name: "Portfolio", href: "/artisan/portfolio" },
  { name: "Add Product", href: "/artisan/add-product" },
  { name: "Edit Profile", href: "/artisan/edit-profile" },
];

export default function ArtisanLayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-slate-900">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:shadow-none">
          <div className="flex items-center justify-between px-5 py-5 lg:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B1E4F] text-lg font-semibold text-white">
                H
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">HunarConnect</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Seller Panel</p>
              </div>
            </Link>

            <button
              type="button"
              className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className={`${isMobileMenuOpen ? "block" : "hidden"} px-4 pb-4 lg:block lg:px-5 lg:pb-8`}>
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#8B1E4F] text-white shadow-lg shadow-[#8B1E4F]/20"
                        : "text-slate-700 hover:bg-[#8B1E4F]/10 hover:text-[#8B1E4F]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <Link
                href="/"
                className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#8B1E4F]"
              >
                Logout
              </Link>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
