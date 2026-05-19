export type ProductCategory = "rings" | "necklaces" | "diamonds";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  carat?: number;
  description: string;
  image: string;
};

export const categoryLabels: Record<ProductCategory | "all", string> = {
  all: "הכל",
  rings: "טבעות יהלום",
  necklaces: "שרשראות",
  diamonds: "יהלומים בודדים",
};

export const products: Product[] = [
  {
    id: "r-001",
    name: "טבעת סוליטר קלאסית",
    category: "rings",
    price: 24500,
    carat: 1.05,
    description: "יהלום עגול ניצוץ מושלם, שיבוץ זהב לבן 18K.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80",
  },
  {
    id: "r-002",
    name: "טבעת יהלום הילה",
    category: "rings",
    price: 18900,
    carat: 0.8,
    description: "הילת יהלומים סביב אבן מרכזית מרהיבה.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
  },
  {
    id: "r-003",
    name: "טבעת אירוסין יוקרתית",
    category: "rings",
    price: 39800,
    carat: 1.5,
    description: "אבן מרכזית מעוצבת ביד עם פרטי זהב ורוד עדינים.",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=80",
  },
  {
    id: "n-001",
    name: "שרשרת טיפת יהלום",
    category: "necklaces",
    price: 12400,
    carat: 0.5,
    description: "תליון טיפה בליטוש ברילינט על שרשרת זהב צהוב 18K.",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80",
  },
  {
    id: "n-002",
    name: "שרשרת ריבר יהלומים",
    category: "necklaces",
    price: 56200,
    carat: 3.2,
    description: "שורת יהלומים רציפה — קלאסיקה נצחית למראה מלכותי.",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=80",
  },
  {
    id: "n-003",
    name: "מדליון יהלום מינימליסטי",
    category: "necklaces",
    price: 8900,
    carat: 0.3,
    description: "מדליון עדין ליום-יום, שיבוץ פייב מסביב.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
  },
  {
    id: "d-001",
    name: "יהלום עגול ברילינט",
    category: "diamonds",
    price: 31000,
    carat: 1.2,
    description: "בהירות VS1, צבע F — מלווה תעודת GIA.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80",
  },
  {
    id: "d-002",
    name: "יהלום אמרלד קאט",
    category: "diamonds",
    price: 45800,
    carat: 1.8,
    description: "ליטוש מדורג מלבני, אלגנטיות אסופה ונדירה.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
  },
  {
    id: "d-003",
    name: "יהלום אובל פאנסי",
    category: "diamonds",
    price: 27600,
    carat: 1.05,
    description: "צורת אובל מוארכת המעניקה נראות גדולה במיוחד.",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80",
  },
];
