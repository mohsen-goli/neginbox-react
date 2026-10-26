// src/components/Contact.tsx
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, buildWhatsappUrl } from "../data/products";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs bg-[#faf8f5] text-[#8c6527] px-4 py-1.5 rounded-full font-medium mb-4">
            پاسخگویی و مشاوره نگین‌باکس
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1816] mb-4">
            راهنمای انتخاب و سفارش تخت باکس
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            مدل مورد نظرتان را انتخاب کنید یا برای دریافت اطلاعات بیشتر درباره
            مدل‌ها، رنگ‌بندی پارچه‌ها، ابعاد و سفارش با کارشناسان ما در ارتباط
            باشید.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={buildWhatsappUrl(
                "سلام، از طریق سایت نگین‌باکس برای مشاوره و استعلام قیمت پیام می‌دهم.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1ebe5b] transition-colors font-medium"
            >
              <MessageCircle size={18} />
              مشاوره و استعلام در واتساپ
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1816] text-[#1a1816] px-6 py-3 rounded-full hover:bg-[#1a1816] hover:text-white transition-colors font-medium"
            >
              <Phone size={18} />
              تماس مستقیم: {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-[#faf8f5] px-4 py-2 rounded-full">
            <MapPin size={14} />
            <span>
              <strong className="text-[#1a1816]">آدرس کارگاه:</strong>{" "}
              {CONTACT.address}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
