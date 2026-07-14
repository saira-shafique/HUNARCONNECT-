const profile = {
  name: "Ayesha Khan",
  email: "ayesha.khan@email.com",
  phone: "+92 300 1234567",
  city: "Lahore",
  craftCategory: "Embroidery",
  registrationDate: "March 18, 2026",
  cnic: "123412341234",
  cnicStatus: "Verified",
  profileImage: "",
};

const products = [
  {
    name: "Embroidered Dupatta",
    category: "Embroidery",
    price: "PKR 2,800",
    description: "Hand-embroidered dupatta with elegant floral detailing.",
  },
  {
    name: "Crochet Tote Bag",
    category: "Crochet",
    price: "PKR 1,900",
    description: "Soft cotton tote bag with a handmade crochet finish.",
  },
  {
    name: "Lavender Candle Set",
    category: "Candles",
    price: "PKR 1,200",
    description: "Decorative candles infused with calming lavender fragrance.",
  },
  {
    name: "Beaded Earrings",
    category: "Jewelry",
    price: "PKR 1,450",
    description: "Handmade beaded earrings with a premium finish.",
  },
  {
    name: "Lace Cushion Cover",
    category: "Home Decor",
    price: "PKR 1,650",
    description: "Classic lace cushion cover for modern interiors.",
  },
  {
    name: "Machine Stitch Dress",
    category: "Tailoring",
    price: "PKR 3,500",
    description: "Custom-fit dress designed for everyday elegance.",
  },
];

const maskCnic = (cnic: string) => `********${cnic.slice(-4)}`;

export default function ArtisanPortfolioPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Artisan Profile</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Ayesha Khan</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Verified artisan specializing in timeless embroidered designs and handcrafted couture.
            </p>
          </div>
          <a href="/artisan/edit-profile" className="inline-flex items-center justify-center rounded-full bg-[#8B1E4F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
            Edit Profile
          </a>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl bg-[#FFF8F5] p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#F1DCE0] text-3xl font-semibold text-[#8B1E4F]">
                AK
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">{profile.name}</p>
                <p className="text-sm text-slate-500">Embroidery Artisan</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-4xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Contact</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span> {profile.email}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span> {profile.phone}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">City:</span> {profile.city}
                </p>
              </div>
            </div>
            <div className="rounded-4xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Verification</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">CNIC Status:</span> {profile.cnicStatus}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">CNIC Number:</span> {maskCnic(profile.cnic)}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Registered:</span> {profile.registrationDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">My Products</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Products added by this artisan</h2>
          </div>
          <a href="/artisan/add-product" className="inline-flex items-center justify-center rounded-full bg-[#8B1E4F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
            Add New Product
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="overflow-hidden rounded-4xl bg-[#FFF8F5] shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-44 bg-linear-to-br from-[#FEE7E9] via-[#FFEDF0] to-[#FFF8F5]" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                  <span className="rounded-full bg-[#FDF2F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8B1E4F]">
                    {product.category}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#8B1E4F]">{product.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="/artisan/edit-product" className="flex-1 rounded-full border border-[#8B1E4F] bg-white px-4 py-2 text-center text-sm font-semibold text-[#8B1E4F] transition hover:bg-[#8B1E4F]/10">
                    Edit
                  </a>
                  <button className="flex-1 rounded-full bg-[#8B1E4F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
