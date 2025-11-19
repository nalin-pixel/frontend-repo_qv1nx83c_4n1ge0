import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={(e)=>{e.preventDefault(); onSubmit && onSubmit(value)}} className="relative">
      <input
        value={value}
        onChange={(e)=> onChange && onChange(e.target.value)}
        placeholder="Search subjects, branches, years..."
        className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-white/60 placeholder:text-muted-700 text-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-4 rounded-xl bg-ink text-white inline-flex items-center gap-2 shadow-lg">
        <Search size={18} />
        <span className="text-sm font-semibold">Search</span>
      </button>
    </form>
  )
}
