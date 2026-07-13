export default function Home() {
  return (
    <main className="bg-[#FFF8F5] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-[#8B1E4F]/10 px-4 py-2 text-sm font-semibold text-[#8B1E4F]">
              Support Local Women Artisans
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl" style={{ fontFamily: "Playfair Display, serif" }}>
                Discover Handmade Crafts Made With Passion.
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Support talented women artisans by exploring handmade products including tailoring, candles, crochet, embroidery, jewelry and handmade gifts.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#categories" className="inline-flex items-center justify-center rounded-full bg-[#8B1E4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
                Explore Products
              </a>
              <a href="/register" className="inline-flex items-center justify-center rounded-full border border-[#8B1E4F] bg-white px-6 py-3 text-sm font-semibold text-[#8B1E4F] transition hover:bg-[#8B1E4F]/10">
                Become an Artisan
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50">
                <p className="text-3xl font-semibold text-slate-900">300+</p>
                <p className="mt-2 text-sm text-slate-500">Verified Artisans</p>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50">
                <p className="text-3xl font-semibold text-slate-900">1500+</p>
                <p className="mt-2 text-sm text-slate-500">Products</p>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50">
                <p className="text-3xl font-semibold text-slate-900">4.9★</p>
                <p className="mt-2 text-sm text-slate-500">Customer Rating</p>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50">
                <p className="text-3xl font-semibold text-slate-900">24hr</p>
                <p className="mt-2 text-sm text-slate-500">Average Response</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl rounded-[42px] bg-gradient-to-br from-[#FEE7E9] via-[#FFEDF0] to-[#FFF8F5] p-6 shadow-[0_24px_80px_rgba(139,30,79,0.15)] sm:p-8">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[36px] bg-slate-200">
                <div className="flex h-full items-center justify-center text-3xl font-semibold text-slate-500">
                  Artisan Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="bg-[#FFF8F5] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Categories</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Explore Categories</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Find handmade products by category.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Machine Stitching",
                description: "Professional tailoring and custom garment stitching.",
                icon: "🧵",
              },
              {
                name: "Embroidery",
                description: "Beautiful hand and machine embroidered designs.",
                icon: "🪡",
              },
              {
                name: "Zardozi",
                description: "Traditional gold and silver thread embroidery.",
                icon: "✨",
              },
              {
                name: "Applique",
                description: "Creative fabric patchwork with artistic designs.",
                icon: "🧵",
              },
              {
                name: "Crochet",
                description: "Handmade crochet accessories, clothing, and décor.",
                icon: "🧶",
              },
              {
                name: "Fabric Painting",
                description: "Unique hand-painted fabrics and textile art.",
                icon: "🎨",
              },
              {
                name: "Mirror Work",
                description: "Traditional mirror embroidery for vibrant ethnic wear.",
                icon: "🪞",
              },
              {
                name: "Lace Trims",
                description: "Decorative lace borders for dresses and crafts.",
                icon: "🧵",
              },
            ].map((category) => (
              <div key={category.name} className="group rounded-[32px] bg-white p-6 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 h-40 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FEE7E9] via-[#FFEDF0] to-[#FFF8F5]">
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-[#8B1E4F]">
                    <span className="text-5xl">{category.icon}</span>
                    <p className="text-sm font-medium">{category.name} image</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                <button className="mt-6 inline-flex rounded-full bg-[#8B1E4F] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Featured</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Meet Our Artisans</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              { name: "Ayesha Tailor", location: "Rawalpindi", category: "Tailoring" },
              { name: "Sana Crochet", location: "Lahore", category: "Crochet" },
              { name: "Nida Candles", location: "Islamabad", category: "Candles" },
              { name: "Mira Jewelry", location: "Karachi", category: "Jewelry" },
            ].map((artisan) => (
              <div key={artisan.name} className="rounded-[32px] bg-white p-6 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 h-48 overflow-hidden rounded-[28px] bg-slate-200" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{artisan.name}</h3>
                  <p className="text-sm text-slate-500">{artisan.location}</p>
                  <div className="flex items-center gap-2 text-sm text-amber-500">★★★★★</div>
                  <span className="inline-flex rounded-full bg-[#FDF2F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8B1E4F]">
                    {artisan.category}
                  </span>
                </div>
                <button className="mt-6 w-full rounded-full bg-[#8B1E4F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6F173D]">
                  View Shop
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8F5] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Process</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">How HunarConnect Works</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: "Step 1", title: "Register", description: "Create your account." },
              { step: "Step 2", title: "Browse", description: "Explore artisans and products." },
              { step: "Step 3", title: "Order", description: "Place your order directly." },
              { step: "Step 4", title: "Receive", description: "Receive your handmade product and leave a review." },
            ].map((item, index) => (
              <div key={item.step} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#8B1E4F]/10 text-lg font-semibold text-[#8B1E4F]">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Benefits</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Why Choose HunarConnect</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Verified Artisans", description: "CNIC verified artisan accounts.", icon: "✔" },
              { title: "Secure Shopping", description: "Safe ordering experience.", icon: "🔒" },
              { title: "Support Local Women", description: "Empowering small businesses.", icon: "🌸" },
            ].map((feature) => (
              <div key={feature.title} className="rounded-[32px] bg-white p-6 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#8B1E4F]/10 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#8B1E4F] via-[#A33369] to-[#8B1E4F] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-white/5 p-8 text-center shadow-[0_30px_120px_rgba(139,30,79,0.18)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-200">Grow your craft</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Turn Your Skill Into Income</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            Join HunarConnect and start selling handmade products across Pakistan.
          </p>
          <a href="/register" className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#8B1E4F] transition hover:bg-slate-100">
            Become an Artisan
          </a>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">Testimonials</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">What Customers Say</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Sara Khan", review: "Amazing products and quick responses. I love supporting artisans through HunarConnect." },
              { name: "Zainab Ali", review: "Beautiful handmade items with thoughtful details. The platform is easy to use." },
              { name: "Amina Noor", review: "Great customer service and strong local support. Highly recommend HunarConnect." },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-[32px] bg-white p-6 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-600">
                    {testimonial.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-amber-500">★★★★★</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
