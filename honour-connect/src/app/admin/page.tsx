"use client";

import Link from "next/link";
import React from "react";

const stats = {
  users: 1248,
  artisans: 312,
  products: 842,
  pending: 9,
};

const recentReviews = [
  {
    id: 1,
    user: "Ayesha K.",
    rating: 5,
    text: "Amazing work!",
    date: "2026-06-05",
  },
  {
    id: 2,
    user: "Bilal A.",
    rating: 4,
    text: "Very happy",
    date: "2026-05-18",
  },
  {
    id: 3,
    user: "Sana I.",
    rating: 5,
    text: "Stunning craft",
    date: "2026-04-22",
  },
];

const subscriptions = [
  {
    id: 1,
    user: "Mira A.",
    plan: "Premium",
    date: "2026-06-20",
  },
  {
    id: 2,
    user: "Omar F.",
    plan: "Standard",
    date: "2026-06-15",
  },
];

const latestArtisans = [
  {
    id: 1,
    name: "Zara Textiles",
    joined: "2026-06-01",
  },
  {
    id: 2,
    name: "Crafts by Noor",
    joined: "2026-05-28",
  },
];

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Users",
    href: "/admin/users",
  },
  {
    name: "Artisans",
    href: "/admin/artisans",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
  {
    name: "Subscriptions",
    href: "/subscription",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F5] py-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 px-6">

        {/* Sidebar */}

        <aside className="rounded-2xl bg-white shadow p-6">

          <h2 className="text-2xl font-bold text-[#8B1E4D]">
            HunarConnect Admin
          </h2>

          <p className="text-gray-500 mb-6">
            Administrator Panel
          </p>

          <nav className="space-y-2">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-[#FFF0ED] hover:text-[#8B1E4D] transition"
              >
                <span className="w-3 h-3 rounded-full bg-[#8B1E4D]"></span>

                {item.name}
              </Link>
            ))}

            <button
              className="mt-8 w-full rounded-lg bg-[#8B1E4D] py-3 text-white hover:bg-[#74153f]"
            >
              Logout
            </button>

          </nav>

        </aside>

        {/* Main */}

        <main>

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500">
              Admin Overview
            </p>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500">Total Users</p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.users}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500">Total Artisans</p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.artisans}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500">Products</p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.products}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500">
                Pending Approvals
              </p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.pending}
              </h2>
            </div>

          </div>

          {/* Reviews + Subscription */}

          <div className="grid lg:grid-cols-3 gap-6 mt-8">

            <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">

              <div className="flex justify-between mb-5">
                <h2 className="text-2xl font-bold">
                  Recent Reviews
                </h2>

                <Link
                  href="/reviews"
                  className="text-[#8B1E4D] font-semibold"
                >
                  View All
                </Link>
              </div>

              <table className="w-full">

                <thead>

                  <tr className="text-left border-b">

                    <th>User</th>
                    <th>Rating</th>
                    <th>Review</th>
                    <th>Date</th>

                  </tr>

                </thead>

                <tbody>

                  {recentReviews.map((review) => (

                    <tr key={review.id} className="border-b">

                      <td className="py-4">{review.user}</td>

                      <td>{review.rating} ⭐</td>

                      <td>{review.text}</td>

                      <td>{review.date}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

              <div className="flex justify-between mb-4">

                <h2 className="text-xl font-bold">
                  Latest Subscriptions
                </h2>

                <Link
                  href="/subscription"
                  className="text-[#8B1E4D]"
                >
                  View
                </Link>

              </div>

              {subscriptions.map((sub) => (

                <div
                  key={sub.id}
                  className="border rounded-xl p-4 mb-3"
                >

                  <h3 className="font-semibold">
                    {sub.user}
                  </h3>

                  <p>{sub.plan}</p>

                  <p className="text-sm text-gray-500">
                    {sub.date}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Latest Artisans */}

          <div className="bg-white rounded-2xl shadow p-6 mt-8">

            <div className="flex justify-between mb-5">

              <h2 className="text-2xl font-bold">
                Latest Registered Artisans
              </h2>

              <Link
                href="/admin/artisans"
                className="text-[#8B1E4D]"
              >
                View All
              </Link>

            </div>

            <div className="grid md:grid-cols-2 gap-4">

              {latestArtisans.map((artisan) => (

                <div
                  key={artisan.id}
                  className="border rounded-xl p-4"
                >

                  <h3 className="font-semibold">
                    {artisan.name}
                  </h3>

                  <p className="text-gray-500">
                    Joined {artisan.joined}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </main>

      </div>
    </div>
  );
}