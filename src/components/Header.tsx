// src/components/Header.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "../data/products";
import { TelegramIcon, BaleIcon } from "./SocialIcons";

const NAV_LINKS = [
  { href: "#products", label: "مجموعه محصولات" },
  { href: "#reviews", label: "رضایت مشتریان" },
  { href: "#about", label: "مزایای نگین‌باکس" },
  { href: "#about-us", label: "درباره ما" },
  { href: "#contact", label: "سفارش و تماس" },
];

const SOCIAL_LINKS = [
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1a1816] text-white/80 text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>تولیدی نگین‌باکس | {CONTACT.address}</span>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            استعلام مستقیم از کارگاه تولیدی ↗
          </a>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo (فقط عکس) */}
          <a
            href="#"
            className="flex items-center shrink-0"
            aria-label="نگین‌باکس"
          >
            <img
              src="/logo.png"
              alt="نگین‌باکس"
              className="h-12 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#1a1816] hover:text-[#8c6527] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#8c6527] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Social + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#1a1816] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#8c6527] transition-colors"
            >
              <Phone size={14} />
              <span>مشاوره در واتساپ</span>
            </a>

            {/* Social links - فقط دسکتاپ */}
            <div className="hidden md:flex items-center gap-1">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    style={{ color: s.color }}
                  >
                    <Icon width={16} height={16} />
                  </a>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#1a1816]"
              aria-label="منوی سایت"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg text-[#1a1816]">منو</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1"
                  aria-label="بستن"
                >
                  <X size={22} />
                </button>
              </div>

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="py-3 border-b border-gray-100 text-[#1a1816] hover:text-[#8c6527] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Social links in mobile */}
              <div className="flex gap-2 mt-4">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gray-100 text-sm"
                      style={{ color: s.color }}
                    >
                      <Icon width={14} height={14} />
                      {s.label}
                    </a>
                  );
                })}
              </div>

              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[#1a1816] text-white text-center py-3 rounded-full hover:bg-[#8c6527] transition-colors"
              >
                مشاوره در واتساپ
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
