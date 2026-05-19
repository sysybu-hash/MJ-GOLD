"use client";

import { useMemo, useState } from "react";
import { MessageCircle, SlidersHorizontal } from "lucide-react";
import {
  Product,
  ProductCategory,
  categoryLabels,
  products,
} from "@/data/products";

type Filter = ProductCategory | "all";
type Sort = "featured" | "price-asc" | "price-desc";

const PHONE = "972559735000";

export default function Catalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const list = useMemo(() => {
    let l = filter === "all" ? products : products.filter((p) => p.category === filter);
    if (sort === "price-asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [filter, sort]);

  return (
    <section id="catalog" className="relative bg-pearl py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] uppercase tracking-luxury text-gold-deep">
            Collection
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-obsidian mt-3 text-balance">
            הקטלוג שלנו
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-l from-transparent via-gold to-transparent" />
          <p className="mt-6 max-w-xl text-obsidian/60 leading-relaxed">
            יצירות נבחרות בעבודת יד — כל יהלום נבחר אישית ע״י משה ירושלמי
            ומלווה בתעודת אותנטיות.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 pb-6 border-b border-obsidian/10">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(categoryLabels) as Filter[]).map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  filter === key
                    ? "bg-obsidian text-pearl"
                    : "bg-white text-obsidian/70 hover:text-obsidian border border-obsidian/10"
                }`}
              >
                {categoryLabels[key]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-obsidian/50" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="bg-transparent text-sm text-obsidian border-0 focus:ring-0 cursor-pointer"
            >
              <option value="featured">מומלצים</option>
              <option value="price-asc">מחיר: מהנמוך לגבוה</option>
              <option value="price-desc">מחיר: מהגבוה לנמוך</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-obsidian/50 py-16">
            לא נמצאו פריטים בקטגוריה זו.
          </p>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const inquiry = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `שלום משה, אשמח לפרטים נוספים על: ${product.name} (${product.id})`
  )}`;

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-obsidian/5 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-obsidian/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-pearl-200">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.carat && (
          <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-obsidian z-10">
            {product.carat} ct
          </span>
        )}
      </div>

      <div className="p-6 space-y-3">
        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold-deep">
            {categoryLabels[product.category]}
          </p>
          <h3 className="font-display text-xl text-obsidian mt-1">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-obsidian/60 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-obsidian/5">
          <p className="font-display text-2xl text-obsidian">
            ₪{product.price.toLocaleString("he-IL")}
          </p>
          <a
            href={inquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-obsidian text-pearl px-4 py-2 text-xs font-medium hover:bg-gold hover:text-obsidian transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            לפרטים
          </a>
        </div>
      </div>
    </article>
  );
}
