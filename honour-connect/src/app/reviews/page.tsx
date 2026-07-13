"use client";

import { useState } from "react";

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    rating: "",
    review: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      category: "",
      rating: "",
      review: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#FFF8F5] py-12 px-6">
      <div className="mx-auto max-w-3xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#2D1F25]">
            Share Your Experience
          </h1>

          <p className="mt-3 text-gray-600">
            Your feedback helps artisans improve and helps other customers make better choices.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          {submitted && (
            <div className="mb-6 rounded-xl bg-green-100 p-4 text-green-700 font-medium">
              ✅ Thank you! Your review has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}

            <div>
              <label className="mb-2 block font-medium text-[#2D1F25]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#8B1E4D] focus:outline-none"
              />
            </div>

            {/* Category */}

            <div>
              <label className="mb-2 block font-medium text-[#2D1F25]">
                Product Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#8B1E4D] focus:outline-none"
              >
                <option value="">Select Category</option>
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

            {/* Rating */}

            <div>
              <label className="mb-2 block font-medium text-[#2D1F25]">
                Rating
              </label>

              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#8B1E4D] focus:outline-none"
              >
                <option value="">Select Rating</option>
                <option value="5">★★★★★ Excellent</option>
                <option value="4">★★★★ Very Good</option>
                <option value="3">★★★ Good</option>
                <option value="2">★★ Fair</option>
                <option value="1">★ Poor</option>
              </select>
            </div>

            {/* Review */}

            <div>
              <label className="mb-2 block font-medium text-[#2D1F25]">
                Your Review
              </label>

              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Write your experience..."
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#8B1E4D] focus:outline-none"
              />
            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#8B1E4D] py-3 text-lg font-semibold text-white transition hover:bg-[#731942]"
            >
              Submit Review
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}