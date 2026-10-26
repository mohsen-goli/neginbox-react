// src/components/About.tsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about-us" className="py-20 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#1a1816] text-white rounded-3xl p-8 md:p-14"
        >
          <span className="text-sm text-[#c9a76a] font-medium">
            تولیدی نگین‌باکس
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
            درباره ما | برای خانه‌ای مرتب‌تر و کاربردی‌تر
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            نگین‌باکس با تمرکز بر تولید تخصصی تخت‌های باکس‌دار، تلاش می‌کند
            محصولاتی کاربردی، مقاوم و متناسب با سبک زندگی و خانه‌های امروزی
            ارائه دهد.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            هدف ما این است که با بهره‌گیری از اسکلت فلزی با آهن پروفیل مقاوم،
            فضای پنهان بیشتری در اختیار شما قرار دهیم و انتخاب و سفارش تخت را
            برای شما ساده‌تر و مطمئن‌تر کنیم.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-white/10">
            <div>
              <div className="font-bold text-[#c9a76a] mb-1">
                اسکلت فلزی (آهن پروفیل)
              </div>
              <div className="text-sm text-white/60">
                استحکام کامل، بدون لق‌شدگی و صدا
              </div>
            </div>
            <div>
              <div className="font-bold text-[#c9a76a] mb-1">
                تولید و عرضه مستقیم
              </div>
              <div className="text-sm text-white/60">
                ارسال مستقیم از کارگاه به سراسر کشور
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#c9a76a] text-[#1a1816] px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
          >
            دریافت مشاوره و تماس با ما
          </a>
        </motion.div>
      </div>
    </section>
  );
}
