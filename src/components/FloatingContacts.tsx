// src/components/FloatingContacts.tsx
import { motion } from "framer-motion";
import { CONTACT } from "../data/products";
import { WhatsappIcon, TelegramIcon, BaleIcon } from "./SocialIcons";

const FLOATING_LINKS = [
  {
    href: CONTACT.telegram,
    label: "تلگرام",
    icon: TelegramIcon,
    bg: "#229ED9",
  },
  {
    href: CONTACT.bale,
    label: "بله",
    icon: BaleIcon,
    bg: "#79D99A",
  },
  {
    href: `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
      "سلام، برای مشاوره و خرید تخت باکس نگین‌باکس پیام می‌دهم.",
    )}`,
    label: "واتساپ",
    icon: WhatsappIcon,
    bg: "#25D366",
  },
];

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {FLOATING_LINKS.map((link, i) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: link.bg, color: "#fff" }}
          >
            <Icon width={26} height={26} />
          </motion.a>
        );
      })}
    </div>
  );
}
