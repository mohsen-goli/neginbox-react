// src/components/Testimonials.tsx
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Clock, Truck } from "lucide-react";
import { buildWhatsappUrl } from "../data/products";

type ReviewCategory = "strength" | "storage" | "delivery";

interface Review {
  id: number;
  author: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  location: string;
  text: string;
  duration: string;
  tag: string;
  category: ReviewCategory;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "فرهاد رستمی",
    initials: "ف‌ر",
    avatarBg: "#f0e6d6",
    avatarColor: "#8c6527",
    location: "تهران، سعادت‌آباد • خرید مدل کنگره ۱۶۰",
    text: "قبل از خرید نگین‌باکس، تخت‌خواب قبلی ما از جنس نئوپان و چوب بود که بعد از یک سال به صدا افتاده بود. اسکلت آهن پروفیل نگین‌باکس واقعاً یک‌تکه و سنگین و قرصه. حتی وقتی روش جابه‌جا می‌شیم کوچک‌ترین صدایی تولید نمی‌کنه. جک‌های گازی هم بسیار نرم کار می‌کنن و بالا بردنش زحمتی نداره.",
    duration: "ثبت نظر پس از ۹ ماه استفاده مداوم",
    tag: "اسکلت آهن دوبل",
    category: "strength",
  },
  {
    id: 2,
    author: "مهسا ناصری",
    initials: "م‌ن",
    avatarBg: "#e5edf5",
    avatarColor: "#2d5a88",
    location: "اصفهان • خرید مدل جک‌دار مینیمال ۱۴۰",
    text: "اتاق خواب آپارتمان ما کمد دیواری خیلی کوچیکی داشت و همیشه با چمدان‌ها و تشک مهمان مشکل داشتیم. زیر این تخت مثل یک کمد دیواری افقی عمل می‌کنه! باورم نمی‌شد این‌قدر وسیله داخلش جا بشه. کفپوش داخل باکس هم باعث شده هیچ گرد و خاکی وارد وسایل نشه. ارزش خرید صددرصدی داره.",
    duration: "ثبت نظر پس از ۵ ماه استفاده",
    tag: "فضای ذخیره حداکثری",
    category: "storage",
  },
  {
    id: 3,
    author: "دکتر علیرضا کاظمی",
    initials: "ع‌ک",
    avatarBg: "#e6f3eb",
    avatarColor: "#237346",
    location: "شیراز • خرید تخت‌باکس دو تکه هتلینگ ۱۸۰",
    text: "چون راه‌پله ساختمان ما باریک بود، همیشه نگران بودم تخت سایز ۱۸۰ چطور بالا میاد. مدل دو تکه هتلینگ نگین‌باکس فوق‌العاده راحت منتقل شد و داخل اتاق به هم جفت شد. تحویل و هماهنگی کارگاه واقعاً محترمانه و سر وقت بود و بسته‌بندی ضدضربه داشت. از استادکاران این مجموعه سپاسگزارم.",
    duration: "ثبت نظر پس از ۷ ماه استفاده",
    tag: "دو تکه حمل آسان",
    category: "delivery",
  },
  {
    id: 4,
    author: "سمیرا حیدری",
    initials: "س‌ح",
    avatarBg: "#faedea",
    avatarColor: "#9c3f2d",
    location: "تهران، پاسداران • خرید مدل کلاسیک جک‌دار ۱۶۰",
    text: "ضامن ایمنی جک‌ها خیلی برام مهم بود که یه موقع ناگهانی پایین نیاد؛ سیستم اهرم نگین‌باکس کاملاً استاندارده و قفل اطمینان داره. پارچه بدنه بسیار باکیفیت و نانو هست و رنگش دقیقاً همون چیزی شد که می‌خواستیم. به تمام دوستانم هم پیشنهاد کردم.",
    duration: "ثبت نظر پس از ۱ سال استفاده",
    tag: "جک با قفل ایمنی",
    category: "strength",
  },
  {
    id: 5,
    author: "پیمان مرادی",
    initials: "پ‌م",
    avatarBg: "#f3e9f7",
    avatarColor: "#6e358b",
    location: "کرج، مهرشهر • خرید مدل لمسه سفارشی",
    text: "من مستقیم رفتم کارگاهشون توی خیابان سراج و از نزدیک اسکلت‌های خام و آهن پروفیل رو دیدم. جوشکاری‌ها صنعتی و تمیزه، نه اینکه دو تا خال‌جوش سطحی باشه. بعد از تحویل هم تمام چمدان‌های مسافرتی، لباس‌های زمستانه و جعبه‌ها زیر تخت مرتب چیده شد و اتاق نفس کشید.",
    duration: "ثبت نظر پس از ۳ ماه استفاده",
    tag: "تولید مستقیم کارگاهی",
    category: "storage",
  },
  {
    id: 6,
    author: "نرگس بهرامی",
    initials: "ن‌ب",
    avatarBg: "#eaf4f4",
    avatarColor: "#1e6b6f",
    location: "مشهد • خرید مدل مدرن ۱۶۰ طوسی",
    text: "از مشهد به صورت آنلاین سفارش دادم و نگران بودم جنس پارچه و اسکلت چطور برسه. ولی تحویل باربری عالی بود، کار با دقت نایلون‌پیچ شده بود و حتی یک لکه هم نداشت. نصب پایه‌ها هم فوق‌العاده راحت بود. به نظرم بهترین سرمایه‌گذاری برای نظم دادن به اتاق خوابه.",
    duration: "ثبت نظر پس از ۶ ماه استفاده",
    tag: "ارسال شهرستان بیمه‌شده",
    category: "delivery",
  },
];

const TABS: { key: "all" | ReviewCategory; label: string }[] = [
  { key: "all", label: "همه نظرات (۶)" },
  { key: "strength", label: "استحکام اسکلت و جک‌ها" },
  { key: "storage", label: "فضای انباری و جاداری" },
  { key: "delivery", label: "تحویل و کیفیت ساخت" },
];

const TRUST_FEATURES = [
  {
    icon: Shield,
    title: "اسکلت آهن پروفیل ۱۰۰٪ بی‌صدا",
    desc: "تضمین عدم غژغژ، لرزش یا شکستگی حتی در وزن‌های بالا",
  },
  {
    icon: Clock,
    title: "۲۴ ماه گارانتی تعویض کلاف و جک",
    desc: "پشتیبانی و خدمات بدون واسطه و مستقیم از کارگاه تولیدی",
  },
  {
    icon: Truck,
    title: "ارسال به سراسر کشور با بسته‌بندی مقاوم",
    desc: "تحویل فوری در تهران و باربری بیمه‌شده برای تمام استان‌ها",
  },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"all" | ReviewCategory>("all");

  const filteredReviews = useMemo(() => {
    if (activeTab === "all") return REVIEWS;
    return REVIEWS.filter((r) => r.category === activeTab);
  }, [activeTab]);

  return (
    <section id="reviews" className="py-20 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-sm text-[#8c6527] font-medium mb-2">
            صدای خریداران نگین‌باکس
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1816] mb-4">
            رضایت مشتریان از تخت باکس نگین‌باکس
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ببینید خریدارانی که از سراسر کشور تخت‌باکس‌های نگین‌باکس را سفارش
            داده‌اند، درباره مقاومت آهن پروفیل، بی‌صدا بودن و فضای آزادشده اتاق
            خواب چه می‌گویند.
          </p>
        </div>

        {/* Trust Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-10 grid md:grid-cols-[1fr_auto_2fr] gap-6 md:gap-8 items-center shadow-sm"
        >
          {/* Score */}
          <div className="text-center md:text-right">
            <div className="flex items-baseline gap-2 justify-center md:justify-start mb-2">
              <span className="text-5xl font-extrabold text-[#1a1816]">
                ۴.۹
              </span>
              <span className="text-gray-500">از ۵</span>
            </div>
            <div className="text-[#f5b301] text-xl tracking-widest mb-2">
              ★★★★★
            </div>
            <p className="text-sm text-gray-500 mb-3">
              میانگین امتیاز بیش از ۴۸۰ سفارش تحویل‌شده
            </p>
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} strokeWidth={3} />
              ۹۸٪ رضایت و پیشنهاد به دیگران
            </span>
          </div>

          <div className="hidden md:block w-px h-32 bg-gray-100" />

          {/* Features */}
          <div className="grid gap-4">
            {TRUST_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#faf8f5] flex items-center justify-center shrink-0 text-[#8c6527]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1a1816]">
                      {f.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTab === tab.key
                  ? "bg-[#1a1816] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((r) => (
              <motion.article
                key={r.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                      style={{ background: r.avatarBg, color: r.avatarColor }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-[#1a1816] text-sm">
                          {r.author}
                        </h4>
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] px-2 py-0.5 rounded-full">
                          <Check size={10} strokeWidth={3} />
                          خریدار تأیید شده
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {r.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#f5b301] text-sm shrink-0">★★★★★</div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  «{r.text}»
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs">
                  <span className="text-gray-400">{r.duration}</span>
                  <span className="bg-[#faf8f5] text-[#8c6527] px-2.5 py-1 rounded-full font-medium">
                    {r.tag}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#1a1816] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              چرا مشتریان تخت باکس نگین‌باکس را انتخاب می‌کنند؟
            </h3>
            <p className="text-white/70 text-sm">
              تجربه و نظر خود را با ما در میان بگذارید یا پیش از خرید، با
              کارشناسان تولیدی مشورت کنید.
            </p>
          </div>
          <a
            href={buildWhatsappUrl(
              "سلام، میخواستم نظرم رو درباره تخت باکس ثبت کنم یا مشاوره بگیرم.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1a1816] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            اشتراک‌گذاری تجربه در واتساپ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
