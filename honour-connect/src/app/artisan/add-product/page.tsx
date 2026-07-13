"use client";

import { useState } from "react";

const categories = ["Embroidery", "Crochet", "Tailoring", "Jewelry", "Home Decor", "Candles"];

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = "Product name is required.";
    if (!formData.price.trim()) nextErrors.price = "Price is required.";
    if (!formData.category) nextErrors.category = "Please choose a category.";
    if (!formData.description.trim()) nextErrors.description = "Description is required.";
    if (!formData.image) nextErrors.image = "Please upload an image.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    alert("Product saved successfully!");
  };

  return (
    <div className="space-y-8">
      <section className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Add Product</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Create a new listing</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Add your latest handmade creation to your portfolio and start attracting buyers.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700">Product Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
              placeholder="e.g. Handcrafted Crochet Set"
            />
            {errors.name ? <p className="mt-2 text-sm text-rose-600">{errors.name}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Price</label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
              placeholder="PKR 2,000"
            />
            {errors.price ? <p className="mt-2 text-sm text-rose-600">{errors.price}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Category</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category ? <p className="mt-2 text-sm text-rose-600">{errors.category}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Upload Image</label>
            <input
              type="file"
              onChange={(e) => handleChange("image", e.target.value)}
              className="mt-2 block w-full rounded-2xl border border-dashed border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm text-slate-600"
            />
            {errors.image ? <p className="mt-2 text-sm text-rose-600">{errors.image}</p> : null}
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium text-slate-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={5}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#FFF8F5] px-4 py-3 text-sm outline-none transition focus:border-[#8B1E4F] focus:ring-2 focus:ring-[#8B1E4F]/20"
            placeholder="Describe the product, materials, and design details"
          />
          {errors.description ? <p className="mt-2 text-sm text-rose-600">{errors.description}</p> : null}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="rounded-full bg-[#8B1E4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
            Save Product
          </button>
          <a href="/artisan/portfolio" className="rounded-full border border-[#8B1E4F] bg-white px-6 py-3 text-center text-sm font-semibold text-[#8B1E4F] transition hover:bg-[#8B1E4F]/10">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
