import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-3xl bg-white border border-[#E9D9D1] p-10 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#8B1E4D]">Settings</h1>
          <p className="mt-3 text-sm text-[#6B7280]">Update your account settings in one elegant place.</p>
        </div>

        <div className="rounded-3xl bg-[#FFF8F5] border border-[#E9D9D1] p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-[#2D1F25]">Change Password</h2>

          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#2D1F25]">Current Password</label>
              <input type="password" className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#2D1F25]">New Password</label>
              <input type="password" className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#2D1F25]">Confirm Password</label>
              <input type="password" className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            <button className="w-full rounded-xl bg-[#8B1E4D] py-3 text-sm font-semibold text-white transition hover:bg-[#73153F]">
              Update Password
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[#E9D9D1] bg-[#FFF1EF] p-6">
          <h2 className="text-xl font-semibold text-[#8B1E4D]">Delete Account</h2>
          <button className="mt-4 rounded-xl bg-[#8B1E4D] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#73153F]">
            Delete
          </button>
        </div>
        <div className="mt-6">
          <Link href="/profile" className="inline-flex rounded-xl border border-[#E9D9D1] bg-white px-4 py-3 text-sm font-semibold text-[#2D1F25] transition hover:border-[#8B1E4D] hover:text-[#8B1E4D]">
            Back to Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
