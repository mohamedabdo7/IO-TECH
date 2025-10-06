"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Filter, Grid, List, Home, ChevronRight } from "lucide-react";
import { Service } from "@/lib/services";
import SearchFilters from "../SearchFilters";
import ServiceCard from "../ServiceCard";
import Pagination from "../Pagination";
import Link from "next/link";

interface SearchContentProps {
  services: Service[];
  categories: string[];
  totalResults: number;
  totalPages: number;
  currentPage: number;
  filters: {
    query?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
  };
  locale: string;
}

export default function SearchContent({
  services,
  categories,
  totalResults,
  totalPages,
  currentPage,
  filters,
  locale,
}: SearchContentProps) {
  const t = useTranslations("SearchPage");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRTL = locale === "ar";

  const [searchQuery, setSearchQuery] = useState(filters.query || "");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const updateSearchParams = (
    newParams: Record<string, string | undefined>
  ) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    params.delete("page"); // Reset to first page on filter change
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({ query: searchQuery });
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-primary  text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/80">
              <Link
                href={`/${locale}`}
                className="flex items-center hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                <span>{locale === "ar" ? "الرئيسية" : "Home"}</span>
              </Link>
              <ChevronRight
                className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
              />
              <span className="text-white">{t("title")}</span>
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold  mb-6 text-center">
              {t("title")}
            </h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 rtl:right-auto rtl:left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  {t("searchButton")}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                <span>{t("filters")}</span>
              </button>
            </div>

            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <SearchFilters
                categories={categories}
                filters={filters}
                onFilterChange={updateSearchParams}
                locale={locale}
              />
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">
                  {`${totalResults} ${t("resultsFound")}`}
                  {filters.query && (
                    <span className="ml-2 rtl:ml-0 rtl:mr-2">
                      {`${t("for")} "${filters.query}"`}
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Grid/List */}
            {services.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ServiceCard service={service} viewMode={viewMode} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {t("noResults")}
                </h3>
                <p className="text-gray-500">{t("tryAdjusting")}</p>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  locale={locale}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
