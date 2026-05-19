"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#catalog", label: "קטלוג" },
  { href: "#about", label: "אודות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/85 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-semibold gold-gradient tracking-tight">
            MJ-GOLD
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-luxury text-pearl/60 border-r border-gold/40 pr-2">
            Diamonds
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-pearl/90 hover:text-gold transition-colors relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+972559735000"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs font-medium text-pearl hover:bg-gold hover:text-obsidian transition-all"
        >
          <Phone className="h-3.5 w-3.5" />
          055-973-5000
        </a>

        <button
          className="md:hidden text-pearl"
          onClick={() => setOpen(true)}
          aria-label="פתח תפריט"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-obsidian md:hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20">
            <span className="font-display text-xl gold-gradient">MJ-GOLD</span>
            <button onClick={() => setOpen(false)} aria-label="סגור תפריט">
              <X className="h-6 w-6 text-pearl" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 p-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-pearl border-b border-pearl/10 hover:text-gold transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href="tel:+972559735000"
                className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-3 text-sm text-gold"
              >
                <Phone className="h-4 w-4" />
                055-973-5000
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
