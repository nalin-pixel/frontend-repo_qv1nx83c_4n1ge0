export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="h-9 w-9 rounded-xl bg-gradient-primary shadow-glow mb-3" />
          <p className="text-muted-700 leading-relaxed">Premium exam papers and handwritten notes crafted for Indian college students. Clean, fast and trustworthy.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-ink font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-muted-700">
              <li><a href="/products" className="hover:text-primary-600">Browse</a></li>
              <li><a href="#features" className="hover:text-primary-600">Features</a></li>
              <li><a href="#" className="hover:text-primary-600">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-ink font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-muted-700">
              <li><a href="#" className="hover:text-primary-600">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-600">Contact</a></li>
              <li><a href="#" className="hover:text-primary-600">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-muted-700">
          <p>© {new Date().getFullYear()} StudyVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
