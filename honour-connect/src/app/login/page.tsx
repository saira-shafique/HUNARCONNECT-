"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { loginAs } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    loginAs("customer");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white border border-[#E9D9D1] p-10 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#8B1E4D]">Welcome Back</h1>
          <p className="mt-3 text-[#6B7280]">Sign in to continue exploring talented artisans.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-[#2D1F25]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-[#E9D9D1] bg-white p-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#2D1F25]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="w-full rounded-xl border border-[#E9D9D1] bg-white p-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]"
            />
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-[#8B1E4D] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button className="w-full rounded-xl bg-[#8B1E4D] py-3 text-white font-semibold transition hover:bg-[#73153F]">
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#2D1F25]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[#8B1E4D]">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
