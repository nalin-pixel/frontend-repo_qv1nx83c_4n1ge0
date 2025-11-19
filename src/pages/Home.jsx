import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import { Sparkles, ShieldCheck, Clock, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="absolute inset-0" style={{background:'radial-gradient(800px circle at 10% 10%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(600px circle at 90% 30%, rgba(255,255,255,0.18), transparent 40%)'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 border border-white/50 text-sm text-white mb-5">
                <Sparkles size={16} /> Premium academic resources
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Get verified question papers and handwritten notes
              </h1>
              <p className="mt-4 text-white/90 text-lg max-w-xl">Curated by toppers, organized by branch and year. Simple pricing, instant downloads, trusted by thousands.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/products"><Button className="bg-white text-ink">Browse Resources</Button></Link>
                <Button variant="glass">How it works</Button>
              </div>
            </div>
            <Card className="p-5 bg-white/25 border-white/40">
              <SearchBar />
              <div className="mt-5 grid grid-cols-3 gap-3">
                {['BTech','BBA','BCA','IT','MBA','MCA'].map(cat => (
                  <div key={cat} className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-center text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform">
                    {cat}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-700">Try searching "Data Structures 3rd Year"</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: 'Verified & Trustworthy', desc: 'Every paper and note is reviewed for quality and accuracy.' },
            { icon: Clock, title: 'Instant Downloads', desc: 'Pay securely and get your files immediately. No waiting.' },
            { icon: Layers, title: 'Organized by Branch & Year', desc: 'Filters tuned for Indian universities and semesters.' },
          ].map((f, idx) => (
            <Card key={idx} className="p-6">
              <div className="h-12 w-12 rounded-2xl bg-white/70 border border-white/60 grid place-items-center mb-4">
                <f.icon className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-muted-700 mt-1">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
