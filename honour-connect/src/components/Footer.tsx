import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/about" className="hover:text-indigo-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-indigo-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-indigo-600">
            Terms
          </Link>
        </div>
        <p>© 2026 HunarConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}
