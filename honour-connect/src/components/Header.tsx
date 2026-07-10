"use client";

import Link from "next/link";
import { useAuth } from "./AuthContext";

export default function Header() {
  const { authState, logout } = useAuth();
  const isCustomer = authState.loggedIn && authState.role === "customer";
  const isArtisan = authState.loggedIn && authState.role === "artisan";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
            H
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">HunarConnect</h2>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="/categories" className="hover:text-indigo-600">
            Categories
          </Link>
          {isCustomer ? (
            <>
              <Link href="/orders" className="hover:text-indigo-600">
                My Orders
              </Link>
              <Link href="/profile" className="hover:text-indigo-600">
                Profile
              </Link>
            </>
          ) : null}
          {isArtisan ? (
            <>
              <Link href="/my-shop" className="hover:text-indigo-600">
                My Shop
              </Link>
              <Link href="/orders" className="hover:text-indigo-600">
                Orders
              </Link>
              <Link href="/profile" className="hover:text-indigo-600">
                Profile
              </Link>
            </>
          ) : null}
          {!authState.loggedIn ? (
            <>
              <Link href="/register" className="hover:text-indigo-600">
                Become an Artisan
              </Link>
              <Link href="/about" className="hover:text-indigo-600">
                About
              </Link>
              <Link href="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </>
          ) : null}
        </nav>

        <div className="flex items-center gap-3">
          {authState.loggedIn ? (
            <>
              <Link href="/notifications" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600">
                Notifications
              </Link>
              <button
                onClick={logout}
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-indigo-600">
                Login
              </Link>
              <Link href="/register" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
