export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]';

  const styles = {
    primary: 'bg-ink text-white shadow-xl hover:-translate-y-0.5 focus:ring-primary-400',
    soft: 'bg-white/80 text-ink border border-white/60 shadow-sm hover:bg-white',
    glass: 'bg-white/30 text-ink border border-white/50 backdrop-blur-xl hover:bg-white/40',
    accent: 'bg-gradient-accent text-ink shadow-lg hover:brightness-105',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
