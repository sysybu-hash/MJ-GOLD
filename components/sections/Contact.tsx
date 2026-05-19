"use client";

import { useState } from "react";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative bg-pearl py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-14 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-gold-deep">
              Contact
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-obsidian mt-3 text-balance">
              נשמח לעמוד <span className="gold-gradient">לרשותך.</span>
            </h2>
            <div className="mt-5 h-px w-16 bg-gradient-to-l from-gold-deep to-transparent" />
            <p className="mt-6 max-w-lg text-obsidian/60 leading-relaxed text-lg">
              לפגישת ייעוץ אישית, צפייה באוסף או שאלה על יהלום ספציפי — אנחנו
              כאן עבורך, באופן אישי ודיסקרטי.
            </p>
          </div>

          <ul className="space-y-5">
            <ContactRow
              icon={<Phone className="h-5 w-5" />}
              label="טלפון ישיר"
              value="+972 55-973-5000"
              href="tel:+972559735000"
              ltr
            />
            <ContactRow
              icon={<Mail className="h-5 w-5" />}
              label="דוא״ל"
              value="info@mj-gold.co.il"
              href="mailto:info@mj-gold.co.il"
            />
            <ContactRow
              icon={<MapPin className="h-5 w-5" />}
              label="כתובת"
              value="בורסת היהלומים, רמת גן"
            />
          </ul>

          <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6">
            <p className="text-sm text-obsidian/70 leading-relaxed">
              <span className="font-semibold text-obsidian">פגישות באישור מראש בלבד.</span>{" "}
              לתיאום מועד ופרטים נוספים — אנא חייגו או השאירו פרטים.
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-3xl bg-white border border-obsidian/10 p-8 lg:p-10 luxury-shadow space-y-5"
        >
          <Field
            label="שם מלא"
            id="name"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            required
          />
          <Field
            label="טלפון"
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            required
          />
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-luxury text-obsidian/50 mb-2"
            >
              הודעה
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="ספר/י לנו מה אתם מחפשים..."
              className="w-full rounded-xl border border-obsidian/15 bg-pearl/50 px-4 py-3 text-sm text-obsidian placeholder:text-obsidian/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-obsidian text-pearl px-6 py-4 text-sm font-semibold hover:bg-gold-deep hover:text-pearl disabled:opacity-70 transition-all"
          >
            {status === "idle" && (
              <>
                שליחת פנייה
                <Send className="h-4 w-4" />
              </>
            )}
            {status === "sending" && "שולח..."}
            {status === "sent" && (
              <>
                נשלח בהצלחה
                <Check className="h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-obsidian/40 text-center">
            הפרטים נשמרים בדיסקרטיות מלאה ואינם מועברים לצד שלישי.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  ltr,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  ltr?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-obsidian text-gold">
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-luxury text-obsidian/40">
          {label}
        </p>
        <p
          className="font-display text-lg text-obsidian"
          dir={ltr ? "ltr" : undefined}
        >
          {value}
        </p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="hover:text-gold-deep transition-colors block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-luxury text-obsidian/50 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-obsidian/15 bg-pearl/50 px-4 py-3 text-sm text-obsidian focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
      />
    </div>
  );
}
