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

  // فیلتر و جستجو با useMemo (بهینه)
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
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="text-sm text-[#8c6527] font-medium mb-2">
            محصولات نگین‌باکس
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1816] mb-4">
            مدل‌های تخت باکس نگین‌باکس
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ساخته شده با اسکلت فلزی و آهن پروفیل مستحکم، قابل سفارش در انواع
            سایزها و متناسب با متراژ اتاق شما.
          </p>
        </div>

        {/* Toolbar: Filters + Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(CATEGORY_LABELS) as Filter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === cat
                    ? "bg-[#1a1816] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی مدل مورد نظر..."
              className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:border-[#8c6527] text-sm"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              مدلی با نام جستجو شده پیدا نشد.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("all");
              }}
              className="px-6 py-2 bg-[#1a1816] text-white rounded-full text-sm"
            >
              مشاهده تمام مدل‌ها
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProduct(p)}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {p.mediaTag && (
                      <span
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                          p.mediaTagClass === "tag-bronze"
                            ? "bg-[#8c6527] text-white"
                            : p.mediaTagClass === "tag-dark"
                              ? "bg-[#1a1816] text-white"
                              : "bg-white text-[#1a1816] shadow"
                        }`}
                      >
                        {p.mediaTag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                      <span>{p.categoryLabel}</span>
                      <span>{p.metaIndicator}</span>
                    </div>
                    <h3 className="font-bold text-lg text-[#1a1816] mb-2">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                      {p.summary}
                    </p>
                    <a
                      href={buildWhatsappUrl(p.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#1a1816] text-white py-2.5 rounded-full text-sm hover:bg-[#8c6527] transition-colors"
                    >
                      استعلام قیمت و سفارش
                      <ArrowLeft size={14} />
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
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-md"
                aria-label="بستن"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.imageAlt}
                  className="w-full h-full object-cover"
                />

                <div className="p-6 md:p-8">
                  <span className="text-xs text-[#8c6527] font-medium bg-[#faf8f5] px-3 py-1 rounded-full inline-block mb-3">
                    مشخصات فنی و متریال
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a1816] mb-3">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {selectedProduct.summary}
                  </p>

                  <div className="bg-[#faf8f5] rounded-xl p-4 mb-6 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">ابعاد قابل سفارش:</span>
                      <span className="text-[#1a1816] font-medium text-left">
                        ۹۰، ۱۲۰، ۱۴۰، ۱۶۰ و ۱۸۰ سانتی‌متر
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">جنس بدنه و اسکلت:</span>
                      <span className="text-[#1a1816] font-medium text-left">
                        اسکلت فلزی با آهن پروفیل مقاوم
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">سیستم بازشو:</span>
                      <span className="text-[#1a1816] font-medium text-left">
                        جک هیدرولیکی نرم و بی‌صدا با ضامن ایمنی
                      </span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsappUrl(selectedProduct.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-full hover:bg-[#1ebe5b] transition-colors"
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
