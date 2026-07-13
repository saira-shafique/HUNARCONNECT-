"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F5] border-b border-[#F3E9E6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 h-20 sm:px-8">
        
        {/* Left Side - Logo and Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B1E4F] text-lg font-semibold text-white">
            H
          </div>
          <Link href="/" className="text-xl font-semibold text-slate-900 hidden sm:block">
            HunarConnect
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700 flex-1 justify-center">
          <Link href="/" className="transition hover:text-[#8B1E4D]">
            Home
          </Link>
          <Link href="/categories" className="transition hover:text-[#8B1E4D]">
            Categories
          </Link>
          <Link href="/about" className="transition hover:text-[#8B1E4D]">
            About
          </Link>
          <a href="#contact" className="transition hover:text-[#8B1E4D]">
            Contact
          </a>
        </nav>

        {/* Right Side - Search Bar and Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-60 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            />
          </div>
          
          <Link
            href="/login"
            className="rounded-full bg-white border border-[#8B1E4D] px-4 py-2 text-sm font-medium text-[#8B1E4D] transition hover:bg-[#8B1E4D]/5 whitespace-nowrap"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[#8B1E4D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#73153F] whitespace-nowrap"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
