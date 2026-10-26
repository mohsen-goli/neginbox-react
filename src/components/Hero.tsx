// src/components/Hero.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import { CONTACT } from "../data/products";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-[#faf8f5] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* متن سمت راست */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm text-gray-700 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              تولید تخصصی تخت‌باکس‌های کاربردی
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1816] leading-tight mb-4"
            >
              تخت باکس فلزی نگین‌باکس
              <span className="block text-[#8c6527] mt-2 font-serif italic font-medium">
                تولید و سفارش مستقیم
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              تخت‌های باکس‌دار نگین‌باکس با طراحی زیبا و اسکلت فلزی از جنس آهن
              پروفیل، به شما کمک می‌کنند از تمام متراژ زیر تخت مانند یک کمد
              جادار استفاده کنید.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#1a1816] text-white px-8 py-4 rounded-full hover:bg-[#8c6527] transition-colors font-medium"
              >
                مشاهده و انتخاب مدل‌ها
                <ArrowDown size={18} />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1816] text-[#1a1816] px-8 py-4 rounded-full hover:bg-[#1a1816] hover:text-white transition-colors font-medium"
              >
                <Phone size={18} />
                تماس با کارشناس
              </a>
            </motion.div>
          </div>

          {/* تصویر تخت جک‌دار */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md lg:max-w-lg cursor-pointer select-none group"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* عکس بسته (پایه) */}
              <motion.img
                src="/images/bed-closed.png"
                alt="تخت باکس بسته"
                className="w-full h-auto drop-shadow-2xl"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* عکس باز */}
              <motion.img
                src="/images/bed-open.png"
                alt="تخت باکس باز"
                className="absolute inset-0 w-full h-auto drop-shadow-2xl"
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  rotateX: isOpen ? 0 : 15,
                  scale: isOpen ? 1 : 0.95,
                  y: isOpen ? 0 : 10,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                style={{
                  transformOrigin: "bottom center",
                  transformPerspective: 1000,
                }}
              />

              {/* راهنمای کلیک */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-lg px-4 py-2 rounded-full text-sm text-[#1a1816] whitespace-nowrap pointer-events-none"
                  >
                    👆 برای دیدن فضای زیر تخت کلیک کنید
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* آمار پایین */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right"
        >
          {[
            { title: "متراژ مفید", desc: "استفاده کامل از فضای زیر تخت" },
            { title: "آهن پروفیل", desc: "اسکلت فلزی محکم و بدون صدا" },
            { title: "سفارشی", desc: "ابعاد دقیق و رنگ دلخواه" },
          ].map((m, i) => (
            <div key={i}>
              <div className="text-lg font-bold text-[#8c6527]">{m.title}</div>
              <div className="text-sm text-gray-500">{m.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
