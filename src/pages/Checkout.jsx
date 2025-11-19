import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function Checkout() {
  const [paid, setPaid] = useState(false)

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!paid ? (
          <Card className="p-6">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <p className="text-muted-700">Secure payment via Razorpay</p>
            <div className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Your Name" className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-sm" />
                <input placeholder="Email" className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-sm" />
              </div>
              <input placeholder="College / University" className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-sm" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-2xl font-extrabold">₹25</div>
              <Button onClick={()=> setPaid(true)} className="">Pay with Razorpay</Button>
            </div>
          </Card>
        ) : (
          <Card className="p-10 text-center">
            <CheckCircle2 className="mx-auto text-emerald-500" size={64} />
            <h2 className="mt-4 text-2xl font-bold">Payment Successful</h2>
            <p className="text-muted-700">Your order is confirmed. Download is ready.</p>
            <div className="mt-6 inline-flex gap-3">
              <Button variant="accent">Download PDF</Button>
              <Button variant="soft">Go to Library</Button>
            </div>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  )
}
