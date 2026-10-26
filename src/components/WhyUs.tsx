// src/components/WhyUs.tsx
import { motion } from "framer-motion";
import { Package, Layers, MessageCircle } from "lucide-react";

const ADVANTAGES = [
  {
    num: "۰۱",
    icon: Package,
    title: "استفاده بهینه از متراژ",
    desc: "فضای داخلی باکس به شما امکان می‌دهد وسایل اضافی، چمدان‌ها و لحاف‌ها را منظم نگهداری کنید و فضای آزاد بیشتری در اتاق داشته باشید.",
  },
  {
    num: "۰۲",
    icon: Layers,
    title: "اسکلت فلزی با آهن پروفیل",
    desc: "بهره‌گیری از کلاف فلزی ساخته شده با آهن پروفیل مرغوب که بدون ایجاد صدا یا لرزش، طول عمر بالای تخت خواب را تضمین می‌کند.",
  },
  {
    num: "۰۳",
    icon: MessageCircle,
    title: "مشاوره قبل از سفارش",
    desc: "امکان دریافت راهنمایی تخصصی درباره انتخاب ابعاد مناسب نسبت به متراژ اتاق خواب و ارسال کالیته‌های متنوع پارچه قبل از ثبت نهایی.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm text-[#8c6527] font-medium mb-2">
            چرا نگین‌باکس؟
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1816] max-w-3xl mx-auto">
            فقط یک تخت نیست؛ استفاده هوشمندانه از متراژ اتاق
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#faf8f5] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-bold text-[#8c6527]/30">
                    {adv.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8c6527]">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[#1a1816] mb-3">
                  {adv.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
