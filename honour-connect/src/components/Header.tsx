"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F5] shadow-sm shadow-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B1E4F] text-lg font-semibold text-white">
              H
            </div>
            <Link href="/" className="text-xl font-semibold text-slate-900">
              HunarConnect
            </Link>
          </div>

          <div className="w-full sm:w-[520px]">
            <input
              type="text"
              placeholder="Search products or artisans..."
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
            <Link href="/" className="transition hover:text-[#8B1E4F]">
              Home
            </Link>
            <Link href="/categories" className="transition hover:text-[#8B1E4F]">
              Categories
            </Link>
            <Link href="/about" className="transition hover:text-[#8B1E4F]">
              About
            </Link>
            <a href="#contact" className="transition hover:text-[#8B1E4F]">
              Contact
            </a>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/login"
              className="rounded-full bg-white border border-[#8B1E4D] px-4 py-2 text-sm font-medium text-[#8B1E4D] transition hover:bg-[#8B1E4D]/5"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#8B1E4D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#73153F]"
            >
              Register
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}
