export default function Hero() {
  return (
    <header className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold-soft mb-6">
            Crafted in Jaipur, India
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            Scent is memory
            <br />
            <span className="italic text-gold">wearing perfume.</span>
          </h1>
          <p className="text-cream-dim text-lg max-w-md mb-10 leading-relaxed">
            Six fragrances built from Rajasthan's oldest attar traditions and
            reworked for a modern signature. No shortcuts, no synthetics
            pretending otherwise.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="#collection" className="font-mono text-xs uppercase tracking-widest bg-gold text-ink px-6 py-3.5 hover:bg-gold-soft transition-colors">
              Explore the collection
            </a>
            <a href="#notes" className="font-mono text-xs uppercase tracking-widest border-b border-gold pb-0.5">
              See the notes ↓
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/bottle-sandhya.svg"
            alt="Anokhi Parfum signature bottle"
            className="w-48 md:w-64 drop-shadow-[0_0_40px_rgba(200,152,63,0.2)]"
          />
        </div>
      </div>
    </header>
  );
}