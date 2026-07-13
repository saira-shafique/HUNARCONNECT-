const stats = [
  { title: "Total Products", value: "24", detail: "Active listings" },
  { title: "Total Orders", value: "86", detail: "Completed this month" },
  { title: "Total Revenue", value: "PKR 184,500", detail: "Across all orders" },
  { title: "Pending Orders", value: "7", detail: "Awaiting fulfillment" },
];

const activities = [
  { title: "New order received", time: "10 mins ago", note: "Customer ordered 2 embroidered dupattas." },
  { title: "Product updated", time: "1 hour ago", note: "Price changed on Handcrafted Candle Set." },
  { title: "New review added", time: "3 hours ago", note: "Client left a 5-star review for the crochet set." },
];

export default function ArtisanDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Your artisan dashboard is ready.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Track your orders, manage products, and grow your handmade business from one polished place.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FDF2F8] px-4 py-3 text-sm font-semibold text-[#8B1E4F]">
            Status: Available for new orders
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
            <p className="text-sm font-medium text-slate-500">{item.title}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Recent Activity</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Latest updates</h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {activities.map((activity) => (
              <div key={activity.title} className="rounded-2xl border border-slate-200 bg-[#FFF8F5] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{activity.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{activity.note}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Quick Actions</p>
          <div className="mt-6 space-y-3">
            <a href="/artisan/add-product" className="flex w-full items-center justify-center rounded-full bg-[#8B1E4F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
              Add Product
            </a>
            <a href="/artisan/portfolio" className="flex w-full items-center justify-center rounded-full border border-[#8B1E4F] bg-white px-5 py-3 text-sm font-semibold text-[#8B1E4F] transition hover:bg-[#8B1E4F]/10">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
