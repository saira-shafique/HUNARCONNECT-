import Link from "next/link";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Categories</h1>
        <p className="mt-2 text-slate-600">Browse service categories and find the right artisan for your needs.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Tailoring",
            "Hand Sewing",
            "Crochet",
            "Embroidery",
            "Jewelry",
            "Woodcraft",
          ].map((category) => (
            <Link
              key={category}
              href="#"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-indigo-300 hover:bg-indigo-50"
            >
              <h2 className="text-xl font-semibold text-slate-900">{category}</h2>
              <p className="mt-2 text-sm text-slate-600">Explore artisans and projects in this category.</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
