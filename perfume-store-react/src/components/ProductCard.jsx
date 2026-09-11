import { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function ProductCard({ product, delay = 0 }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <Reveal delay={delay}>
      <div className="border border-cream/10 p-7 flex flex-col min-h-[280px] hover:border-gold/60 hover:-translate-y-1.5 transition-all duration-300">
        <img
          src={product.image}
          alt={`${product.name} perfume bottle`}
          className="w-16 h-32 self-center mb-5"
          loading="lazy"
        />
        <span className="font-mono text-xs uppercase tracking-widest text-gold">
          {product.time}
        </span>
        <h3 className="font-display text-3xl italic mt-2 mb-2">{product.name}</h3>
        <p className="text-cream-dim text-sm flex-grow">{product.notes}</p>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-cream/10">
          <span className="font-mono text-sm text-gold-soft">{product.price}</span>
          <button
            onClick={handleAdd}
            className="font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-gold transition-colors"
          >
            {added ? "Added ✓" : "Add →"}
          </button>
        </div>
      </div>
    </Reveal>
  );
}