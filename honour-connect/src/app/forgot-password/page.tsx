import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white border border-[#E9D9D1] p-10 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#8B1E4D]">Forgot Password</h1>
          <p className="mt-3 text-sm text-[#6B7280]">Enter your registered email to reset your password.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-[#2D1F25]">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border border-[#E9D9D1] bg-white p-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]"
            />
          </div>

          <button className="w-full rounded-xl bg-[#8B1E4D] py-3 text-sm font-semibold text-white transition hover:bg-[#73153F]">
            Send Reset Link
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#6B7280]">
          Remember your password?{" "}
          <Link href="/login" className="font-semibold text-[#8B1E4D] hover:text-[#73153F]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
