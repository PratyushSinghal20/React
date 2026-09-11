import { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 1800);
  }

  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-24">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Try before it's a habit.
            </h2>
            <p className="text-cream-dim max-w-sm">
              Sample sets ship across India in 4–6 days. Full bottles come with a
              30-day scent-match guarantee.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-cream/20 px-4 py-3 text-sm placeholder:text-cream-dim focus:border-gold outline-none"
            />
            <button
              type="submit"
              className="font-mono text-xs uppercase tracking-widest bg-gold text-ink px-6 py-3 hover:bg-gold-soft transition-colors whitespace-nowrap"
            >
              {submitted ? "Thanks!" : "Notify me"}
            </button>
          </form>
        </div>
      </Reveal>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-cream-dim/60">
        <span>© 2026 Prenium Parfum, Jaipur. </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream transition-colors">Instagram</a>
          <a href="#" className="hover:text-cream transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}