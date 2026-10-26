// src/components/Products.tsx
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft, X } from "lucide-react";
import {
  products,
  CATEGORY_LABELS,
  buildWhatsappUrl,
  type Product,
  type ProductCategory,
} from "../data/products";

type Filter = ProductCategory | "all";

export default function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = filter === "all" || p.category === filter;
      const matchesSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [filter, query]);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="text-xs font-bold tracking-wider text-[#8c6527] mb-3 uppercase">
            محصولات نگین‌باکس
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1816]">
              مدل‌های تخت باکس نگین‌باکس
            </h2>
            <p className="text-gray-500 text-sm max-w-md lg:text-left leading-relaxed">
              ساخته شده با اسکلت فلزی و آهن پروفیل مستحکم، قابل سفارش در انواع
              سایزها و متناسب با متراژ اتاق شما.
            </p>
          </div>
        </div>

        {/* Toolbar: Filters + Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 w-full border-b border-gray-100 pb-6">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {(Object.keys(CATEGORY_LABELS) as Filter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#1a1816] text-white shadow-md"
                    : "bg-[#f8f7f4] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی مدل مورد نظر..."
              className="w-full pr-11 pl-4 py-3 bg-[#f8f7f4] border border-transparent rounded-full focus:outline-none focus:border-[#c9a76a] focus:bg-white transition-colors text-sm"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-[#f8f7f4] rounded-2xl">
            <p className="text-gray-500 mb-4 font-medium">
              مدلی با نام جستجو شده پیدا نشد.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("all");
              }}
              className="px-6 py-2.5 bg-[#1a1816] text-white rounded-full text-sm hover:bg-[#8c6527] transition-colors"
            >
              مشاهده تمام مدل‌ها
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProduct(p)}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f7f4]">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {p.mediaTag && (
                      <span
                        className={`absolute top-3 right-3 px-3 py-1.5 rounded-md text-xs font-bold backdrop-blur-md ${
                          p.mediaTagClass === "tag-bronze"
                            ? "bg-[#8c6527]/90 text-white"
                            : p.mediaTagClass === "tag-dark"
                              ? "bg-[#1a1816]/90 text-white"
                              : "bg-white/90 text-[#1a1816] shadow-sm"
                        }`}
                      >
                        {p.mediaTag}
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 mb-3 uppercase tracking-wider">
                      <span>{p.categoryLabel}</span>
                      <span>{p.metaIndicator}</span>
                    </div>

                    <h3 className="font-bold text-lg text-[#1a1816] mb-3">
                      {p.name}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                      {p.summary}
                    </p>

                    <a
                      href={buildWhatsappUrl(p.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-between w-full border border-gray-200 text-[#1a1816] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1a1816] hover:text-white hover:border-[#1a1816] transition-colors duration-300"
                    >
                      استعلام قیمت و سفارش
                      <ArrowLeft size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-sm hover:bg-white transition-colors"
                aria-label="بستن"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#f8f7f4] aspect-square md:aspect-auto">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-[#8c6527] bg-[#f8f7f4] px-3 py-1.5 rounded-md uppercase tracking-wider inline-block mb-4 self-start">
                    مشخصات فنی و متریال
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1816] mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {selectedProduct.summary}
                  </p>

                  <div className="bg-[#f8f7f4] rounded-xl p-5 mb-8 space-y-4 text-sm">
                    <div className="flex justify-between gap-4 border-b border-gray-200/50 pb-3">
                      <span className="text-gray-500">ابعاد قابل سفارش:</span>
                      <span className="text-[#1a1816] font-medium text-left">
                        ۹۰، ۱۲۰، ۱۴۰، ۱۶۰ و ۱۸۰ سانتی‌متر
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-gray-200/50 pb-3">
                      <span className="text-gray-500">جنس بدنه و اسکلت:</span>
                      <span className="text-[#1a1816] font-medium text-left">
                        اسکلت فلزی با آهن پروفیل مقاوم
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">سیستم بازشو:</span>
                      <span className="text-[#1a1816] font-medium text-left">
                        جک هیدرولیکی نرم و بی‌صدا
                      </span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsappUrl(selectedProduct.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#1a1816] text-white py-3.5 rounded-xl hover:bg-[#8c6527] transition-colors duration-300 font-medium"
                  >
                    مشاوره و استعلام در واتساپ
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
