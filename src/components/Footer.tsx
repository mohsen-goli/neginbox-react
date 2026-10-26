// src/components/Footer.tsx
import { CONTACT } from "../data/products";
import { InstagramIcon, TelegramIcon, BaleIcon } from "./SocialIcons";

const QUICK_LINKS = [
  { href: "#products", label: "کاتالوگ محصولات" },
  { href: "#about", label: "مزایای نگین‌باکس" },
  { href: "#about-us", label: "درباره ما" },
  { href: "#contact", label: "تماس و سفارش" },
];

const SOCIAL_LINKS = [
  {
    href: CONTACT.instagram,
    label: "اینستاگرام",
    icon: InstagramIcon,
    color: "#E4405F",
  },
  {
    href: CONTACT.telegram,
    label: "تلگرام",
    icon: TelegramIcon,
    color: "#229ED9",
  },
  {
    href: CONTACT.bale,
    label: "بله",
    icon: BaleIcon,
    color: "#79D99A",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1816] text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="font-bold text-xl mb-3">نگین‌باکس</div>
          <p className="text-sm text-white/60 leading-relaxed">
            تولید تخصصی تخت‌های باکس‌دار با اسکلت فلزی از جنس آهن پروفیل، طراحی
            کاربردی و استفاده بهینه از متراژ اتاق خواب.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-[#c9a76a]">دسترسی سریع</h4>
          <div className="flex flex-col gap-2 text-sm">
            {QUICK_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="font-bold mb-3 text-[#c9a76a]">ارتباط با نگین‌باکس</h4>
          <p className="text-sm text-white/70 mb-2">
            <strong className="text-white">تلفن:</strong> {CONTACT.phoneDisplay}
          </p>
          <p className="text-sm text-white/70 mb-4">
            <strong className="text-white">آدرس:</strong> {CONTACT.address}
          </p>

          <div className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors px-3 py-2 rounded-full text-xs"
                  style={{ color: s.color }}
                >
                  <Icon width={16} height={16} />
                  <span className="text-white/80">{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© 2026 نگین‌باکس (Neginbox). تمامی حقوق محفوظ است.</p>
          <span>خواب راحت، فضای بیشتر، انتخاب بهتر</span>
        </div>
      </div>
    </footer>
  );
}
