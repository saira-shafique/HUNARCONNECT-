"use client";

import { useState } from "react";

const categories = ["Machine Stitching", "Embroidery", "Zardozi", "Applique", "Crochet", "Fabric Painting", "Mirror Work", "Lace Trims"];

const initialProfile = {
  fullName: "Ayesha Khan",
  email: "ayesha.khan@email.com",
  phone: "+92 300 1234567",
  city: "Lahore",
  craftCategory: "Embroidery",
  profilePicture: "",
  cnicFront: "",
  cnicBack: "",
};

export default function EditProfilePage() {
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      <section className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Edit Profile</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Update artisan details</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Keep your artisan profile up to date to ensure clients see your latest information.
            </p>
          </div>
          <div className="rounded-full bg-[#FDF2F8] px-4 py-3 text-sm font-semibold text-[#8B1E4F]">Password is managed separately</div>
        </div>
      </section>

      <form className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input
              value={profile.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Phone Number</label>
            <input
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">City</label>
            <input
              value={profile.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Craft Category</label>
            <select
              value={profile.craftCategory}
              onChange={(e) => handleChange("craftCategory", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Profile Picture</label>
            <label className="mt-2 flex cursor-pointer items-center justify-between rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#8B1E4F]">
              <span>{profile.profilePicture ? "Image selected" : "Choose image"}</span>
              <span className="rounded-full bg-[#8B1E4F] px-3 py-1 text-xs font-semibold text-white">Upload</span>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => handleChange("profilePicture", e.target.files?.[0]?.name ?? "")}
                className="sr-only"
              />
            </label>
          </div>

          <div className="md:col-span-2 grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">CNIC Front Image</label>
              <label className="mt-2 flex cursor-pointer items-center justify-between rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#8B1E4F]">
                <span>{profile.cnicFront ? "Image selected" : "Choose file"}</span>
                <span className="rounded-full bg-[#8B1E4F] px-3 py-1 text-xs font-semibold text-white">Upload</span>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleChange("cnicFront", e.target.files?.[0]?.name ?? "")}
                  className="sr-only"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">CNIC Back Image</label>
              <label className="mt-2 flex cursor-pointer items-center justify-between rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#8B1E4F]">
                <span>{profile.cnicBack ? "Image selected" : "Choose file"}</span>
                <span className="rounded-full bg-[#8B1E4F] px-3 py-1 text-xs font-semibold text-white">Upload</span>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleChange("cnicBack", e.target.files?.[0]?.name ?? "")}
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="rounded-full bg-[#8B1E4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
            Update Profile
          </button>
          <a href="/artisan/portfolio" className="rounded-full border border-[#8B1E4F] bg-white px-6 py-3 text-center text-sm font-semibold text-[#8B1E4F] transition hover:bg-[#8B1E4F]/10">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
