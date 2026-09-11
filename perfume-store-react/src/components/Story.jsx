import Reveal from "./Reveal.jsx";

export default function Story() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold-soft mb-3">
          Our Story
        </p>
        <h2 className="font-display text-4xl mb-6">Built on Kannauj's attar benches</h2>
        <p className="text-cream-dim leading-relaxed mb-4">
          Kannauj has distilled attar the same way for six hundred years — flowers over
          sandalwood oil, cooked slow in copper stills called deg. Anokhi started as an
          attempt to bring that process to a bottle people could wear daily, without
          losing what made it worth keeping.
        </p>
        <p className="text-cream-dim leading-relaxed">
          We still work with two family-run distilleries there. Everything else — the
          blending, the bottling, the boring parts — happens in Jaipur.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gold/20 p-6">
            <p className="font-display text-4xl text-gold">6</p>
            <p className="font-mono text-xs text-cream-dim uppercase tracking-widest mt-2">
              Signature scents
            </p>
          </div>
          <div className="border border-gold/20 p-6">
            <p className="font-display text-4xl text-gold">600+</p>
            <p className="font-mono text-xs text-cream-dim uppercase tracking-widest mt-2">
              Years of attar craft
            </p>
          </div>
          <div className="border border-gold/20 p-6 col-span-2">
            <p className="font-display text-4xl text-gold">0</p>
            <p className="font-mono text-xs text-cream-dim uppercase tracking-widest mt-2">
              Synthetic fillers in the base notes
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}