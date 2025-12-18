import { Link } from '@inertiajs/react'

export default function Header() {
  return (
    <nav className="border-b border-stone-50/10 px-4">
      <div className="h-20 flex items-center justify-between relative max-w-6xl mx-auto">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tighter">Tshr29</span>
        </Link>
        <Link
          href="/contact"
          className="rounded-xs bg-neutral-800 px-5 py-2.5 font-medium text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Nous contactez
        </Link>
      </div>
    </nav>
  )
}
