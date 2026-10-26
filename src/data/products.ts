// src/data/products.ts

export type ProductCategory = "classic" | "modern" | "special";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  metaIndicator: string;
  mediaTag: string;
  mediaTagClass: string;
  summary: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const CATEGORY_LABELS: Record<ProductCategory | "all", string> = {
  all: "همه مدل‌ها",
  classic: "کلاسیک",
  modern: "مدرن",
  special: "ویژه",
};

export const products: Product[] = [
  {
    id: 1,
    name: "تخت باکس مدل کلاسیک",
    category: "classic",
    categoryLabel: "سبک کلاسیک",
    metaIndicator: "اسکلت فلزی",
    mediaTag: "مدل پرطرفدار",
    mediaTagClass: "",
    summary:
      "طراحی ساده و اصیل با آهن پروفیل مقاوم، مناسب برای دکوراسیون‌های کلاسیک، با دوام ساخت بالا و استفاده بهینه از فضای اتاق.",
    image: "/images/bed-1.jpg",
    imageAlt: "تخت باکس مدل کلاسیک نگین‌باکس",
    whatsappMessage:
      "سلام، درباره تخت باکس مدل کلاسیک استعلام قیمت و مشاوره داشتم.",
  },
  {
    id: 2,
    name: "تخت باکس مدل مدرن",
    category: "modern",
    categoryLabel: "سبک مدرن",
    metaIndicator: "آهن پروفیل",
    mediaTag: "سبک امروزی",
    mediaTagClass: "tag-bronze",
    summary:
      "طراحی شیک و کاربردی برای اتاق‌هایی با سبک امروزی؛ ساختاری محکم با استفاده کامل از متراژ مفید زیر تشک.",
    image: "/images/bed-2.jpg",
    imageAlt: "تخت باکس مدل مدرن نگین‌باکس",
    whatsappMessage:
      "سلام، درباره تخت باکس مدل مدرن استعلام قیمت و مشاوره داشتم.",
  },
  {
    id: 3,
    name: "تخت باکس مدل لمسه",
    category: "special",
    categoryLabel: "سبک ویژه",
    metaIndicator: "لمسه‌دوزی شیک",
    mediaTag: "طراحی لمسه",
    mediaTagClass: "tag-dark",
    summary:
      "طراحی ظریف لمسه‌دوزی در بدنه و تاج با اسکلت فلزی یکپارچه آهن پروفیل؛ تلفیقی چشم‌نواز از زیبایی مدرن و فضای انباری جادار زیر تخت.",
    image: "/images/bed-3.jpg",
    imageAlt: "تخت باکس مدل لمسه نگین‌باکس",
    whatsappMessage:
      "سلام، درباره تخت باکس مدل لمسه استعلام قیمت و مشاوره داشتم.",
  },
  {
    id: 4,
    name: "تخت باکس مدل کنگره",
    category: "classic",
    categoryLabel: "سبک کلاسیک",
    metaIndicator: "اسکلت فلزی",
    mediaTag: "مدل کنگره",
    mediaTagClass: "",
    summary:
      "طراحی کاربردی و مقاوم با اسکلت فلزی و فضای جادار داخلی؛ انتخابی مناسب برای استفاده بهتر از فضای اتاق خواب.",
    image: "/images/bed-4.jpg",
    imageAlt: "تخت باکس مدل کنگره نگین‌باکس",
    whatsappMessage:
      "سلام، درباره تخت باکس مدل کنگره استعلام قیمت و مشاوره داشتم.",
  },
  {
    id: 5,
    name: "تخت باکس مدل مدرن مینیمال",
    category: "modern",
    categoryLabel: "سبک مدرن",
    metaIndicator: "آهن پروفیل",
    mediaTag: "مدل مینیمال",
    mediaTagClass: "tag-bronze",
    summary:
      "طراحی امروزی و مینیمال با ساختار محکم و فضای ذخیره‌سازی کاربردی؛ مناسب برای اتاق‌های مدرن و استفاده بهینه از متراژ.",
    image: "/images/bed-5.jpg",
    imageAlt: "تخت باکس مدل مینیمال مدرن نگین‌باکس",
    whatsappMessage:
      "سلام، درباره تخت باکس مدل مدرن مینیمال استعلام قیمت و مشاوره داشتم.",
  },
  {
    id: 6,
    name: "تخت باکس مدل ویژه ساده",
    category: "special",
    categoryLabel: "سبک ویژه",
    metaIndicator: "طراحی خاص",
    mediaTag: "طراحی ساده",
    mediaTagClass: "tag-dark",
    summary:
      "ترکیبی از ظاهر متفاوت، فضای نگهداری جادار و ساختار مقاوم؛ مناسب برای کسانی که به دنبال یک تخت کاربردی و متفاوت هستند.",
    image: "/images/bed-6.jpg",
    imageAlt: "تخت باکس مدل ویژه ساده نگین‌باکس",
    whatsappMessage:
      "سلام، درباره تخت باکس مدل ویژه ساده استعلام قیمت و مشاوره داشتم.",
  },
];

// اطلاعات تماس مشترک
export const CONTACT = {
  phone: "09123261810",
  phoneDisplay: "۰۹۱۲۳۲۶۱۸۱۰",
  whatsapp: "989123261810",
  whatsappUrl: "https://wa.me/989123261810",
  telegram: "https://t.me/aliamiri4020",
  bale: "https://ble.ir/+989123261810",
  instagram: "https://instagram.com/neginbox",
  address: "خیابان سراج، ابتدای خیابان جهانشاهلو، پلاک ۲۹",
} as const;

export function buildWhatsappUrl(message: string): string {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
