import { Award, HandshakeIcon, Lock, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "מומחיות מוסמכת",
    body: "שלושה עשורים בענף היהלומים, חברות בבורסת היהלומים בישראל ותעודות הסמכה בינלאומיות.",
  },
  {
    icon: Sparkles,
    title: "אותנטיות מובטחת",
    body: "כל יהלום מלווה בתעודה רשמית של GIA / IGI ובאחריות אמינות מלאה לכל החיים.",
  },
  {
    icon: Lock,
    title: "דיסקרטיות מלאה",
    body: "פגישות פרטיות, ייעוץ מותאם אישית ושמירה קפדנית על פרטיות הלקוח.",
  },
  {
    icon: HandshakeIcon,
    title: "ליווי אישי",
    body: "ממפגש ההיכרות הראשון ועד למסירה — משה מלווה אישית כל לקוח לאורך כל הדרך.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-obsidian text-pearl py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-radial-gold opacity-50"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-2 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=85"
              alt="תכשיטי יוקרה MJ-GOLD"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 z-10">
              <p className="text-[10px] uppercase tracking-luxury text-gold">
                Founder
              </p>
              <p className="font-display text-3xl mt-1">משה ירושלמי</p>
              <p className="text-sm text-pearl/70 mt-1">
                מומחה יהלומים · בורסת היהלומים, רמת גן
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-gold">
              About
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-balance">
              דור שלישי <span className="gold-gradient">לאהבת היהלום.</span>
            </h2>
            <div className="mt-5 h-px w-16 bg-gradient-to-l from-gold to-transparent" />
          </div>
          <p className="text-pearl/70 leading-relaxed text-lg">
            המסע של משה ירושלמי בעולם היהלומים החל לפני יותר משלושה עשורים, בבית
            משפחתי שבו ליטוש אבן והענקת ערך הם אומנות נמסרת. כיום, MJ-GOLD היא
            הכתובת ללקוחות המבקשים שילוב נדיר של מומחיות, נדירות ושירות אמיתי.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-xl border border-pearl/10 bg-pearl/[0.02] p-5 hover:border-gold/40 hover:bg-pearl/[0.04] transition-all"
              >
                <p.icon className="h-5 w-5 text-gold mb-3" />
                <h3 className="font-semibold text-pearl">{p.title}</h3>
                <p className="text-sm text-pearl/60 mt-1.5 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
