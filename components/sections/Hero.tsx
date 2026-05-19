import { ArrowLeft, Gem, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-obsidian text-pearl min-h-[100svh] flex items-center grain">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-l from-obsidian via-obsidian/80 to-obsidian/40"
      />
      <div aria-hidden className="absolute inset-0 bg-radial-gold" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-luxury text-gold">
              Est. סוחר יהלומים מוסמך
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-balance">
            <span className="block text-pearl">היהלום שלך,</span>
            <span className="block gold-gradient">בנגיעה אישית.</span>
          </h1>

          <p className="max-w-xl text-lg text-pearl/70 leading-relaxed text-balance">
            <span className="text-gold font-semibold">משה ירושלמי</span> — שלושה
            עשורים של מומחיות בעולם היהלומים. ליווי אישי, אבנים נדירות וייעוץ
            דיסקרטי לרגעים הגדולים בחיים.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalog"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold-light via-gold to-gold-deep px-8 py-4 text-sm font-semibold text-obsidian hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              לקטלוג התכשיטים
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-sm font-semibold text-pearl hover:border-gold hover:text-gold transition-all"
            >
              צור קשר לייעוץ
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-pearl/10">
            <Stat icon={<ShieldCheck className="h-4 w-4" />} label="תעודות GIA" />
            <Stat icon={<Gem className="h-4 w-4" />} label="30+ שנות ניסיון" />
            <Stat icon={<Sparkles className="h-4 w-4" />} label="ייעוץ דיסקרטי" />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 luxury-shadow">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=85"
              alt="טבעת יהלום יוקרתית"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between z-10">
              <div>
                <p className="text-[10px] uppercase tracking-luxury text-gold">
                  Signature Collection
                </p>
                <p className="font-display text-2xl text-pearl mt-1">
                  Eternal · 1.5ct
                </p>
              </div>
              <div className="rounded-full bg-pearl/10 backdrop-blur-md border border-pearl/20 px-3 py-1 text-xs text-pearl">
                GIA Certified
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gold-deep/30 blur-3xl" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-pearl/40 text-[10px] uppercase tracking-luxury">
        Scroll
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-pearl/70">
      <span className="text-gold">{icon}</span>
      {label}
    </div>
  );
}
