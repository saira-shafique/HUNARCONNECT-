import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl rounded-3xl bg-white border border-[#E9D9D1] p-10 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#8B1E4D]">Profile</h1>
          <p className="mt-3 text-sm text-[#6B7280]">Update your profile information with our premium handcrafted aesthetic.</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F4D3C2] text-3xl font-semibold text-[#8B1E4D]">
            U
          </div>
          <p className="text-sm text-[#6B7280]">Profile Picture</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#2D1F25]">Full Name</label>
            <input className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2D1F25]">Email</label>
            <input className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2D1F25]">Phone</label>
            <input className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2D1F25]">City</label>
            <input className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#2D1F25]">Craft Category</label>
            <input className="w-full rounded-xl border border-[#E9D9D1] bg-white px-3 py-3 text-sm text-[#2D1F25] outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <button className="rounded-xl bg-[#8B1E4D] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#73153F]">
            Save Changes
          </button>
          <Link href="/settings" className="rounded-xl border border-[#E9D9D1] bg-white px-4 py-3 text-sm font-semibold text-[#2D1F25] text-center transition hover:border-[#8B1E4D] hover:text-[#8B1E4D]">
            Settings
          </Link>
          <Link href="/login" className="rounded-xl bg-[#8B1E4D] px-4 py-3 text-sm font-semibold text-white text-center transition hover:bg-[#73153F]">
            Logout
          </Link>
        </div>
      </div>
    </main>
  );
}
