import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, Search } from 'lucide-react'
import { useState } from 'react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
    isActive ? 'text-primary-600 bg-white/70 shadow-sm' : 'text-muted-700 hover:text-primary-600 hover:bg-white/60'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-gradient-to-b from-white/70 to-white/30 border-b border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary shadow-glow" />
            <span className="text-lg font-bold tracking-tight text-ink">StudyVault</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/products" className={navLinkClass}>Browse</NavLink>
            <a href="#features" className="px-3 py-2 rounded-xl text-sm font-medium text-muted-700 hover:text-primary-600 hover:bg-white/60 transition-colors">Features</a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/products" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 hover:bg-white text-ink shadow-sm border border-white/60 transition-all">
              <Search size={18} />
              <span className="text-sm font-medium">Search</span>
            </Link>
            <Link to="/checkout" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-ink text-white hover:-translate-y-0.5 transition-transform shadow-lg">
              <ShoppingCart size={18} />
              <span className="text-sm font-semibold">Cart</span>
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/80 border border-white/60">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className="px-3 py-2 rounded-xl text-sm font-medium text-muted-700 bg-white/70">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/products" className="px-3 py-2 rounded-xl text-sm font-medium text-muted-700 bg-white/70">Browse</NavLink>
              <a onClick={() => setOpen(false)} href="#features" className="px-3 py-2 rounded-xl text-sm font-medium text-muted-700 bg-white/70">Features</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
