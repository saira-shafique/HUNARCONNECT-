import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-6 px-6 py-8 text-sm text-slate-600">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/about" className="transition hover:text-indigo-600">
            About Us
          </Link>
          <Link href="/contact" className="transition hover:text-indigo-600">
            Contact
          </Link>
          <Link href="/privacy" className="transition hover:text-indigo-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-indigo-600">
            Terms & Conditions
          </Link>
          <Link href="/faq" className="transition hover:text-indigo-600">
            FAQs
          </Link>
        </div>
        <p className="text-slate-500">© 2026 HunarConnect</p>
      </div>
    </footer>
  );
}
