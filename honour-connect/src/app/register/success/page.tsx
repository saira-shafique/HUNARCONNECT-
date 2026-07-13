import Link from "next/link";

export default function RegistrationSuccessPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-3xl bg-white border border-[#E9D9D1] p-10 shadow-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
          ✓
        </div>
        <h1 className="text-2xl font-bold text-[#2D1F25]">Registration Submitted Successfully</h1>
        <p className="mt-3 text-sm text-[#6B7280]">
          Thank you for registering with HunarConnect. If you registered as an artisan, your account will be reviewed after CNIC verification. Once approved, you can start selling your handmade products.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/login" className="rounded-xl bg-[#8B1E4D] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#73153F]">Go to Login</Link>
          <Link href="/" className="rounded-xl border border-[#E9D9D1] px-6 py-2 text-sm font-medium text-[#2D1F25] transition hover:border-[#8B1E4D]">Return to Home</Link>
        </div>
      </div>
    </main>
  );
}
