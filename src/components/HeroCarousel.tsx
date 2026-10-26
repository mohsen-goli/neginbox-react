// src/components/HeroCarousel.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/bed-1.jpg",
    title: "مدل کلاسیک",
    subtitle: "طراحی اصیل و ماندگار",
  },
  {
    id: 2,
    image: "/images/bed-2.jpg",
    title: "مدل مدرن",
    subtitle: "مینیمال و شیک",
  },
  {
    id: 3,
    image: "/images/bed-3.jpg",
    title: "مدل لمسه",
    subtitle: "جزئیات لوکس و دست‌ساز",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // تغییر خودکار هر ۷ ثانیه (کندتر و آرام‌تر)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = SLIDES.length - 1;
      if (next >= SLIDES.length) next = 0;
      return next;
    });
  };

  // انیمیشن‌های ورود و خروج (محو شدن نرم + زوم ملایم)
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* کادر اصلی */}
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute inset-0"
          >
            {/* عکس */}
            <img
              src={SLIDES[current].image}
              alt={SLIDES[current].title}
              className="w-full h-full object-cover"
            />

            {/* گرادیانت مشکی برای خوانایی متن */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* متن روی عکس */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-2xl font-bold mb-1"
              >
                {SLIDES[current].title}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="text-sm text-white/80"
              >
                {SLIDES[current].subtitle}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* دکمه‌های چپ و راست */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10"
          aria-label="قبلی"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10"
          aria-label="بعدی"
        >
          <ChevronRight size={20} />
        </button>

        {/* نقطه‌های پایین (Indicators) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`رفتن به اسلاید ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* تگ شناور لوکس */}
      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20 max-w-[200px]">
        <div className="w-8 h-8 rounded-full bg-[#8c6527]/10 flex items-center justify-center text-[#8c6527] mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="text-sm font-bold text-[#1a1816]">اسکلت فلزی</div>
        <div className="text-xs text-gray-500 mt-1">آهن پروفیل مقاوم</div>
      </div>
    </div>
  );
}
