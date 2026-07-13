import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#5b183d] via-[#7b224d] to-[#9a3b5f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4A1638] text-lg font-semibold text-white">
              H
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">HunarConnect</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">
                HunarConnect helps local women artisans showcase and sell handmade products.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>
                <Link href="/" className="transition hover:text-[#F5D7A3]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="transition hover:text-[#F5D7A3]">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/register" className="transition hover:text-[#F5D7A3]">
                  Artisans
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#F5D7A3]">
                  About
                </Link>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-[#F5D7A3]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/90">
              <p>Email: support@hunarconnect.com</p>
              <p>Phone: +92 300 0000000</p>
              <p>Location: Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/80">
          © 2026 HunarConnect
        </div>
      </div>
    </footer>
  );
}
