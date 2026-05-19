import type { Metadata } from "next";
import { Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MJ-GOLD | משה ירושלמי — יהלומים ותכשיטי יוקרה",
  description:
    "MJ-GOLD — סוחר יהלומים מוסמך. משה ירושלמי, מומחה ביהלומים ותכשיטי זהב יוקרתיים עם תעודות אותנטיות ושירות אישי דיסקרטי.",
  keywords: [
    "יהלומים",
    "תכשיטים",
    "טבעות יהלום",
    "MJ-GOLD",
    "משה ירושלמי",
    "סוחר יהלומים",
    "תכשיטי זהב",
  ],
  openGraph: {
    title: "MJ-GOLD | יהלומים ותכשיטי יוקרה",
    description:
      "סוחר יהלומים מוסמך — משה ירושלמי. אותנטיות מובטחת, שירות אישי, ייעוץ דיסקרטי.",
    locale: "he_IL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-pearl text-obsidian font-sans antialiased selection:bg-gold/30 selection:text-obsidian">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
