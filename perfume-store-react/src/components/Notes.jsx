import Reveal from "./Reveal.jsx";

const notes = [
  {
    tag: "01 / TOP",
    title: "The first 15 minutes",
    desc: "Pink pepper, bergamot, cardamom. Bright and citric — what people notice when you walk in.",
  },
  {
    tag: "02 / HEART",
    title: "The next few hours",
    desc: "Mogra, saffron, rose absolute. The soul of the fragrance — where it settles into itself.",
  },
  {
    tag: "03 / BASE",
    title: "What lingers after",
    desc: "Mysore sandalwood, oud, amber. What's left on a scarf the next morning.",
  },
];

export default function Notes() {
  return (
    <section id="notes" className="max-w-6xl mx-auto px-6 md:px-10 py-24">
      <Reveal>
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold-soft mb-3">
            Composition
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">How a scent unfolds</h2>
          <p className="text-cream-dim max-w-lg leading-relaxed">
            Featured in <span className="italic text-gold-soft">Sandhya</span> — our
            evening fragrance. Every bottle follows the same three-act structure, just
            with different actors.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {notes.map((note, i) => (
          <Reveal key={note.tag} delay={i * 0.1}>
            <div className="border border-cream/10 p-8 hover:border-gold/60 hover:-translate-y-1.5 transition-all duration-300">
              <span className="font-mono text-xs text-gold">{note.tag}</span>
              <h3 className="font-display text-2xl mt-4 mb-3">{note.title}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">{note.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}