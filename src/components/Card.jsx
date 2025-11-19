export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-card hover:shadow-card-lg transition-shadow ${className}`}>
      {children}
    </div>
  )
}
