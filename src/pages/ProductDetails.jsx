import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'
import { useParams, Link } from 'react-router-dom'

const map = {
  m1: { title: 'DBMS Mid-Sem 2023 (CSE)', price: 15, type: 'Mid-sem', img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop' },
  e1: { title: 'Operating Systems End-Sem 2022 (CSE)', price: 25, type: 'End-sem', img: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop' },
  n1: { title: 'Handwritten Notes: Data Structures', price: 50, type: 'Notes', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop' },
}

export default function ProductDetails() {
  const { id } = useParams()
  const product = map[id] || map.m1

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <img src={product.img} className="w-full h-[360px] object-cover" />
          <div className="p-5">
            <p className="text-sm text-muted-700">Preview sample</p>
            <div className="mt-3 h-40 rounded-2xl bg-white/70 border border-white/60 grid place-items-center text-muted-700">PDF preview placeholder</div>
          </div>
        </Card>
        <div>
          <Card className="p-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-ink text-white">{product.type}</div>
            <h1 className="mt-3 text-2xl font-bold">{product.title}</h1>
            <p className="text-muted-700 mt-1">High-quality scan • Verified answers • Clean formatting</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-3xl font-extrabold">₹{product.price}</div>
              <Link to="/checkout"><Button className="">Buy Now</Button></Link>
            </div>
          </Card>
          <Card className="p-6 mt-4">
            <h3 className="font-semibold">What you get</h3>
            <ul className="list-disc pl-5 text-muted-700 mt-2 space-y-1">
              <li>Instant download link after payment</li>
              <li>High-resolution PDF</li>
              <li>Lifetime access via email</li>
            </ul>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
