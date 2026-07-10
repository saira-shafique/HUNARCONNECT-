import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-12">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">HunarConnect</h1>
          <p className="mt-2 text-sm text-slate-600">Choose your account type to get started.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/register/customer"
            className="rounded-3xl border border-slate-200 bg-indigo-50 px-6 py-10 text-center transition hover:border-indigo-300 hover:bg-indigo-100"
          >
            <p className="text-lg font-semibold text-slate-900">Customer</p>
            <p className="mt-2 text-sm text-slate-600">Browse artisans, request services, and manage orders.</p>
          </Link>

          <Link
            href="/register/artisan"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 text-center transition hover:border-indigo-300 hover:bg-slate-100"
          >
            <p className="text-lg font-semibold text-slate-900">Artisan</p>
            <p className="mt-2 text-sm text-slate-600">Sign up to offer your craft, manage listings, and grow your business.</p>
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
