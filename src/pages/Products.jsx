import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'

const MOCK = [
  { id: 'm1', title: 'DBMS Mid-Sem 2023 (CSE)', branch: 'BTech', year: '3rd Year', type: 'Mid-sem', price: 15, thumbnail: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop' },
  { id: 'e1', title: 'Operating Systems End-Sem 2022 (CSE)', branch: 'BTech', year: '3rd Year', type: 'End-sem', price: 25, thumbnail: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1200&auto=format&fit=crop' },
  { id: 'n1', title: 'Handwritten Notes: Data Structures', branch: 'BTech', year: '2nd Year', type: 'Notes', price: 50, thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'b1', title: 'Business Analytics Mid-Sem 2023', branch: 'BBA', year: '3rd Year', type: 'Mid-sem', price: 15, thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop' },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Browse Resources</h1>
        </div>
        <div className="mb-6">
          <Filters onChange={() => {}} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}
