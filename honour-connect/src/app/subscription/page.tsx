"use client";

import Link from "next/link";

export default function SubscriptionPage() {
  const plans = [
    {
      name: "Free Trial",
      price: "FREE",
      duration: "15 Days",
      button: "Start Free Trial",
      popular: false,
      features: [
        "15 Days Free Access",
        "Upload Products",
        "Receive Orders",
        "Basic Support",
      ],
    },
    {
      name: "Monthly Plan",
      price: "Rs. 500",
      duration: "Per Month",
      button: "Choose Monthly",
      popular: true,
      features: [
        "Unlimited Products",
        "Unlimited Orders",
        "Priority Support",
        "Verified Artisan Badge",
      ],
    },
    {
      name: "Yearly Plan",
      price: "Rs. 5000",
      duration: "Per Year",
      button: "Choose Yearly",
      popular: false,
      features: [
        "Everything in Monthly",
        "Save Rs. 1000",
        "Featured Artisan",
        "Highest Priority Support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8F5] py-14 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-[#F9E8EE] px-4 py-2 text-sm font-semibold text-[#8B1E4D]">
            Artisan Subscription
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#2D1F25]">
            Choose Your Subscription
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Start your HunarConnect journey with a free trial or choose a
            premium plan to grow your handmade business.
          </p>
        </div>

        {/* Current Plan */}

        <div className="mt-12 rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold text-[#8B1E4D]">
            Current Subscription
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border p-5">
              <p className="text-gray-500">Current Plan</p>

              <h3 className="mt-2 text-xl font-bold">
                Free Trial
              </h3>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-gray-500">
                Status
              </p>

              <h3 className="mt-2 font-bold text-green-600">
                Active
              </h3>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-gray-500">
                Expiry
              </p>

              <h3 className="mt-2 font-bold">
                15 Days Remaining
              </h3>
            </div>

          </div>

        </div>

        {/* Plans */}

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl ${
                plan.popular ? "border-2 border-[#8B1E4D]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-[#8B1E4D] px-3 py-1 text-xs text-white">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold text-[#2D1F25]">
                {plan.name}
              </h2>

              <p className="mt-5 text-5xl font-bold text-[#8B1E4D]">
                {plan.price}
              </p>

              <p className="mt-2 text-gray-500">
                {plan.duration}
              </p>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-600">✔</span>
                    {feature}
                  </li>
                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-[#8B1E4D] text-white hover:bg-[#731942]"
                    : "border border-[#8B1E4D] text-[#8B1E4D] hover:bg-[#8B1E4D] hover:text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>

        {/* Benefits */}

        <div className="mt-16 rounded-3xl bg-white p-10 shadow">

          <h2 className="text-3xl font-bold text-center text-[#2D1F25]">
            Why Upgrade?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-[#FFF8F5] p-6 text-center">
              <h3 className="text-lg font-bold">
                Unlimited Products
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Showcase all your handmade items.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F5] p-6 text-center">
              <h3 className="text-lg font-bold">
                More Customers
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Reach buyers across Pakistan.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F5] p-6 text-center">
              <h3 className="text-lg font-bold">
                Verified Badge
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Build trust with customers.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F5] p-6 text-center">
              <h3 className="text-lg font-bold">
                Priority Support
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Get faster help whenever needed.
              </p>
            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <Link
            href="/dashboard"
            className="rounded-xl border border-[#8B1E4D] px-6 py-3 font-semibold text-[#8B1E4D] hover:bg-[#8B1E4D] hover:text-white"
          >
            Back to Dashboard
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-[#8B1E4D] px-6 py-3 font-semibold text-white hover:bg-[#731942]"
          >
            Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}