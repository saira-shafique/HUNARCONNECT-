"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ArtisanRegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cnic, setCnic] = useState("");
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);
  const [city, setCity] = useState("");
  const [craftCategory, setCraftCategory] = useState("Machine Stitching");
  const [businessName, setBusinessName] = useState("");
  const [about, setAbout] = useState("");
  const [plan, setPlan] = useState("trial");
  const [error, setError] = useState("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, setter: (f: File | null) => void) => {
    const file = e.target.files?.[0] ?? null;
    setter(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!fullName.trim() || !email.trim() || !phone.trim() || !cnic.trim() || !city.trim()) {
      setError("Please fill required fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Frontend-only: navigate to success with chosen plan
    router.push(`/register/success?role=artisan&plan=${plan}`);
  };

  return (
    <main className="min-h-screen bg-[#FFF8F5] flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-3xl space-y-8">
        <div className="rounded-3xl bg-white border border-[#E9D9D1] p-8 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[#8B1E4D]">Artisan Registration</h1>
            <p className="mt-2 text-sm text-[#6B7280]">Join HunarConnect to showcase and sell your handmade craft.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#2D1F25]">Full Name</label>
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D1F25]">CNIC Number</label>
              <input value={cnic} onChange={(e) => setCnic(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Upload CNIC Front Image</label>
                <label className="mt-1 flex cursor-pointer items-center justify-between rounded-2xl border border-[#E9D9D1] bg-[#FFF8F5] px-4 py-3 text-sm font-medium text-[#2D1F25] transition hover:border-[#8B1E4D]">
                  <span>{cnicFront?.name ?? "Choose file"}</span>
                  <span className="rounded-full bg-[#8B1E4D] px-3 py-1 text-xs font-semibold text-white">Upload</span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => handleFile(e, setCnicFront)}
                    className="sr-only"
                  />
                </label>
                <p className="mt-2 text-sm text-[#6B7280]">
                  {cnicFront ? cnicFront.name : "JPG, JPEG or PNG only"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Upload CNIC Back Image</label>
                <label className="mt-1 flex cursor-pointer items-center justify-between rounded-2xl border border-[#E9D9D1] bg-[#FFF8F5] px-4 py-3 text-sm font-medium text-[#2D1F25] transition hover:border-[#8B1E4D]">
                  <span>{cnicBack?.name ?? "Choose file"}</span>
                  <span className="rounded-full bg-[#8B1E4D] px-3 py-1 text-xs font-semibold text-white">Upload</span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => handleFile(e, setCnicBack)}
                    className="sr-only"
                  />
                </label>
                <p className="mt-2 text-sm text-[#6B7280]">
                  {cnicBack ? cnicBack.name : "JPG, JPEG or PNG only"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1F25]">Craft Category</label>
                <select value={craftCategory} onChange={(e) => setCraftCategory(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]">
                  <option>Machine Stitching</option>
                  <option>Embroidery</option>
                  <option>Zardozi</option>
                  <option>Applique</option>
                  <option>Crochet</option>
                  <option>Fabric Painting</option>
                  <option>Mirror Work</option>
                  <option>Lace Trims</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D1F25]">Business Name (Optional)</label>
              <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D1F25]">About Yourself</label>
              <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-[#E9D9D1] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B1E4D]" />
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="mt-4 flex justify-end">
              <button type="submit" className="rounded-xl bg-[#8B1E4D] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#73153F]">Continue to Subscription</button>
            </div>
          </form>
        </div>

        <section className="rounded-3xl bg-white border border-[#E9D9D1] p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#8B1E4D]">Choose Your Subscription Plan</h2>
          <p className="mt-2 text-sm text-[#6B7280]">Start with a free trial or choose a paid plan to grow your business.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <label className={`block rounded-xl border p-4 cursor-pointer ${plan === 'trial' ? 'border-[#8B1E4D] shadow-lg' : 'border-[#E9D9D1]'}`}>
              <input type="radio" name="plan" value="trial" checked={plan === 'trial'} onChange={() => setPlan('trial')} className="hidden" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">15-Day Free Trial</h3>
                  <p className="mt-1 text-sm text-[#6B7280]">Price: Rs. 0</p>
                  <ul className="mt-3 text-sm text-[#2D1F25] space-y-1">
                    <li>✓ 15-day free access</li>
                    <li>✓ Upload up to 10 products</li>
                    <li>✓ Basic artisan profile</li>
                    <li>✓ Receive customer inquiries</li>
                  </ul>
                </div>
              </div>
            </label>

            <label className={`block rounded-xl border p-4 cursor-pointer ${plan === 'monthly' ? 'border-[#8B1E4D] shadow-lg' : 'border-[#E9D9D1]'}`}>
              <input type="radio" name="plan" value="monthly" checked={plan === 'monthly'} onChange={() => setPlan('monthly')} className="hidden" />
              <div>
                <h3 className="text-lg font-semibold">Monthly</h3>
                <p className="mt-1 text-sm text-[#6B7280]">Price: Rs. 500/month</p>
                <ul className="mt-3 text-sm text-[#2D1F25] space-y-1">
                  <li>✓ Unlimited product listings</li>
                  <li>✓ Featured artisan profile</li>
                  <li>✓ Order analytics</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
            </label>

            <label className={`block rounded-xl border p-4 cursor-pointer ${plan === 'yearly' ? 'border-[#8B1E4D] shadow-lg' : 'border-[#E9D9D1]'}`}>
              <input type="radio" name="plan" value="yearly" checked={plan === 'yearly'} onChange={() => setPlan('yearly')} className="hidden" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Yearly</h3>
                  <span className="rounded-full bg-[#8B1E4D] px-2 py-0.5 text-xs text-white">Most Popular</span>
                </div>
                <p className="mt-1 text-sm text-[#6B7280]">Price: Rs. 5000/year — Save Rs. 1000</p>
                <ul className="mt-3 text-sm text-[#2D1F25] space-y-1">
                  <li>✓ Everything in Monthly</li>
                  <li>✓ Verified Seller Badge</li>
                  <li>✓ Better search visibility</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button onClick={handleSubmit} className="rounded-xl bg-[#8B1E4D] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#73153F]">Register</button>
          </div>
        </section>
      </div>
    </main>
  );
}
