import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function DashboardPage() {
  const { authState } = useAuth();
  const title = authState.role === "artisan" ? "Artisan Dashboard" : "Customer Dashboard";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-600">Welcome back to HunarConnect.</p>
        <div className="mt-8 space-y-4 text-slate-700">
          <p>Use the header to access your profile, orders, or notifications.</p>
          <p>
            Need help? Visit <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">Contact</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
