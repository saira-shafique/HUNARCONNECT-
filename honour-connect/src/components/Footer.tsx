import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8B1E4D] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Four Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Brand */}
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-lg font-semibold text-white mb-4">
              H
            </div>
            <h2 className="font-bold tracking-[0.16em] uppercase text-white text-lg">HunarConnect</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Supporting local women artisans across Pakistan by connecting handmade products with customers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold tracking-[0.25em] uppercase text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white/80 transition-all duration-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/80 transition-all duration-200 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 transition-all duration-200 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/80 transition-all duration-200 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="font-bold tracking-[0.25em] uppercase text-white">Categories</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/categories" className="text-white/80 transition-all duration-200 hover:text-white">
                  Machine Stitching
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/80 transition-all duration-200 hover:text-white">
                  Embroidery
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/80 transition-all duration-200 hover:text-white">
                  Zardozi
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/80 transition-all duration-200 hover:text-white">
                  Crochet
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/80 transition-all duration-200 hover:text-white">
                  Fabric Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div id="contact">
            <h3 className="font-bold tracking-[0.25em] uppercase text-white">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/80">
              <div>
                <p className="font-medium text-white/90">Email:</p>
                <a href="mailto:support@hunarconnect.com" className="text-white/80 transition-all duration-200 hover:text-white">
                  support@hunarconnect.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white/90">Phone:</p>
                <a href="tel:+923000000000" className="text-white/80 transition-all duration-200 hover:text-white">
                  +92 300 0000000
                </a>
              </div>
              <div>
                <p className="font-medium text-white/90">Location:</p>
                <p className="text-white/80">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80 gap-4">
          <p>© 2026 HunarConnect. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/80 transition-all duration-200 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/80 transition-all duration-200 hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
