import { Phone, Mail, MapPin, Gem } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-pearl/80 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Gem className="h-5 w-5 text-gold" />
            <span className="font-display text-2xl gold-gradient">MJ-GOLD</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-pearl/60">
            MJ-GOLD — בית היהלומים של משה ירושלמי. שירות אישי, אותנטיות מובטחת
            ודיסקרטיות מלאה לכל לקוח.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold mb-4">
            ניווט
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#catalog" className="hover:text-gold">קטלוג</a></li>
            <li><a href="#about" className="hover:text-gold">אודות</a></li>
            <li><a href="#contact" className="hover:text-gold">צור קשר</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold mb-4">
            יצירת קשר
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+972559735000" dir="ltr">+972 55-973-5000</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:info@mj-gold.co.il">info@mj-gold.co.il</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span>בורסת היהלומים, רמת גן</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pearl/10">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-pearl/40">
          <p>© {new Date().getFullYear()} MJ-GOLD · משה ירושלמי. כל הזכויות שמורות.</p>
          <p>Crafted with precision · Tel Aviv</p>
        </div>
      </div>
    </footer>
  );
}
