import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
            H
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">HunarConnect</h2>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="/categories" className="hover:text-indigo-600">
            Categories
          </Link>
          <Link href="/artisan" className="hover:text-indigo-600">
            Become an Artisan
          </Link>
          <Link href="/login" className="hover:text-indigo-600">
            Login
          </Link>
          <Link href="/register" className="rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
