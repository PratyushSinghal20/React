export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/80 border-b border-cream/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl">
          <img src="/images/logo.svg" alt="Anokhi Parfum logo" className="w-8 h-8" />
          Prenium <span className="text-gold italic">Parfume</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-cream-dim">
          <a href="#collection" className="hover:text-cream transition-colors">Collection</a>
          <a href="#notes" className="hover:text-cream transition-colors">Composition</a>
          <a href="#story" className="hover:text-cream transition-colors">Story</a>
          <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
        </div>

        <a href="#collection" className="font-mono text-xs uppercase tracking-widest border border-gold text-gold-soft px-4 py-2 hover:bg-gold hover:text-ink transition-colors">
          Shop
        </a>
      </div>
    </nav>
  );
}