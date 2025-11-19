import { ArrowRight } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Card className="p-4 group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/70 to-white/40 border border-white/60">
          <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-ink/90 text-white shadow">{product.type}</div>
          <div className="absolute bottom-3 right-3 px-3 py-1 text-xs font-bold rounded-full bg-gradient-accent text-ink shadow">₹{product.price}</div>
        </div>
        <div className="mt-3">
          <h3 className="text-ink font-semibold line-clamp-2">{product.title}</h3>
          <p className="text-muted-700 text-sm mt-1">{product.branch} • {product.year}</p>
        </div>
      </Link>
      <div className="mt-3">
        <Button variant="soft" className="w-full justify-between">
          View Details
          <ArrowRight size={18} />
        </Button>
      </div>
    </Card>
  )
}
