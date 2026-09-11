import products from "../products.js";
import ProductCard from "./ProductCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Collection() {
  return (
    <section id="collection" className="max-w-6xl mx-auto px-6 md:px-10 py-24">
      <Reveal>
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold-soft mb-3">
              The Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl">Six moods, six bottles</h2>
          </div>
          <p className="text-cream-dim max-w-xs text-sm">
            Each fragrance is named for the hour it's built to be worn.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}