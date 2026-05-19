"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "972559735000";
const GREETING = encodeURIComponent(
  "שלום משה, הגעתי דרך אתר MJ-GOLD ואשמח לקבל ייעוץ אישי 💎"
);
const WA_URL = `https://wa.me/${PHONE}?text=${GREETING}`;

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {open && (
        <div className="relative max-w-[280px] rounded-2xl border border-gold/30 bg-white p-4 luxury-shadow animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 left-2 text-obsidian/40 hover:text-obsidian transition"
            aria-label="סגור"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 pb-2 border-b border-pearl-300">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-light to-gold-deep flex items-center justify-center text-white font-display font-semibold">
                מ"י
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-obsidian">משה ירושלמי</p>
              <p className="text-[11px] text-emerald-600">זמין כעת</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-obsidian/80 leading-relaxed">
            שלום 👋 אשמח להעניק לך ייעוץ אישי ודיסקרטי בבחירת היהלום או התכשיט
            המושלם.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1FB855] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            התחל שיחה בוואטסאפ
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="פתח צ'אט וואטסאפ"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/30 hover:scale-110 hover:bg-[#1FB855] transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="relative h-7 w-7" strokeWidth={2.2} />
      </button>
    </div>
  );
}
