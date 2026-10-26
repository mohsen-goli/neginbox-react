// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import { CONTACT } from "../data/products";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-[#f8f7f4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* متن سمت راست */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs text-gray-700 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              تولید تخصصی تخت‌باکس‌های کاربردی
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1816] leading-[1.3] mb-5"
            >
              تخت باکس فلزی نگین‌باکس
              <span className="block text-[#8c6527] mt-2 font-serif italic font-medium text-2xl md:text-3xl lg:text-4xl">
                تولید و سفارش مستقیم
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
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
                className="inline-flex items-center justify-center gap-2 bg-[#1a1816] text-white px-7 py-3.5 rounded-full hover:bg-[#8c6527] transition-colors font-medium text-sm"
              >
                مشاهده و انتخاب مدل‌ها
                <ArrowDown size={16} />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-[#1a1816] px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                <Phone size={16} />
                تماس با کارشناس
              </a>
            </motion.div>
          </div>

          {/* اسلایدر سمت چپ */}
          <div className="relative order-1 lg:order-2 flex justify-center w-full">
            <HeroCarousel />
          </div>
        </div>

        {/* آمار پایین */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-6 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right"
        >
          {[
            { title: "متراژ مفید", desc: "استفاده کامل از فضای زیر تخت" },
            { title: "آهن پروفیل", desc: "اسکلت فلزی محکم و بدون صدا" },
            { title: "سفارشی", desc: "ابعاد دقیق و رنگ دلخواه" },
          ].map((m, i) => (
            <div key={i}>
              <div className="text-base font-extrabold text-[#1a1816] mb-1">
                {m.title}
              </div>
              <div className="text-xs md:text-sm text-gray-500">{m.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
