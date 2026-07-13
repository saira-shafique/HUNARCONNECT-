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

export default function ArtisanPortfolioPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Portfolio</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Your handcrafted collection</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Showcase your featured products and keep your catalog updated with ease.
            </p>
          </div>
          <a href="/artisan/add-product" className="inline-flex items-center justify-center rounded-full bg-[#8B1E4F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
            Add New Product
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.name} className="overflow-hidden rounded-4xl bg-white shadow-lg shadow-slate-200/50">
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
              <div className="mt-6 flex gap-3">
                <a href="/artisan/edit-product" className="flex-1 rounded-full border border-[#8B1E4F] px-4 py-2 text-center text-sm font-semibold text-[#8B1E4F] transition hover:bg-[#8B1E4F]/10">
                  Edit
                </a>
                <button className="flex-1 rounded-full bg-[#8B1E4F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
