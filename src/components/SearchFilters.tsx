"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface SearchFiltersProps {
  categories: string[];
  filters: {
    query?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
  };
  onFilterChange: (filters: Record<string, string | undefined>) => void;
  locale: string;
}

export default function SearchFilters({
  categories,
  filters,
  onFilterChange,
  locale,
}: SearchFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    sort: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearFilters = () => {
    onFilterChange({
      category: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      sort: undefined,
    });
  };

  const hasActiveFilters = filters.category || filters.minPrice || filters.maxPrice || filters.sort;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          {locale === "ar" ? "الفلاتر" : "Filters"}
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-red-600 hover:text-red-700 flex items-center space-x-1 rtl:space-x-reverse"
          >
            <X className="w-4 h-4" />
            <span>{locale === "ar" ? "مسح الكل" : "Clear All"}</span>
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("category")}
          className="flex justify-between items-center w-full text-left mb-3"
        >
          <span className="font-medium text-gray-700">
            {locale === "ar" ? "الفئة" : "Category"}
          </span>
          {expandedSections.category ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {expandedSections.category && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={!filters.category}
                onChange={() => onFilterChange({ category: undefined })}
                className="mr-2 rtl:mr-0 rtl:ml-2"
              />
              <span className="text-sm text-gray-600">
                {locale === "ar" ? "جميع الفئات" : "All Categories"}
              </span>
            </label>
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category}
                  onChange={() => onFilterChange({ category })}
                  className="mr-2 rtl:mr-0 rtl:ml-2"
                />
                <span className="text-sm text-gray-600">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex justify-between items-center w-full text-left mb-3"
        >
          <span className="font-medium text-gray-700">
            {locale === "ar" ? "السعر" : "Price Range"}
          </span>
          {expandedSections.price ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {expandedSections.price && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {locale === "ar" ? "الحد الأدنى" : "Min Price"}
              </label>
              <input
                type="number"
                placeholder="0"
                value={filters.minPrice || ""}
                onChange={(e) => onFilterChange({ 
                  minPrice: e.target.value || undefined 
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {locale === "ar" ? "الحد الأقصى" : "Max Price"}
              </label>
              <input
                type="number"
                placeholder="10000"
                value={filters.maxPrice || ""}
                onChange={(e) => onFilterChange({ 
                  maxPrice: e.target.value || undefined 
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Sort Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("sort")}
          className="flex justify-between items-center w-full text-left mb-3"
        >
          <span className="font-medium text-gray-700">
            {locale === "ar" ? "ترتيب حسب" : "Sort By"}
          </span>
          {expandedSections.sort ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {expandedSections.sort && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="sort"
                checked={!filters.sort}
                onChange={() => onFilterChange({ sort: undefined })}
                className="mr-2 rtl:mr-0 rtl:ml-2"
              />
              <span className="text-sm text-gray-600">
                {locale === "ar" ? "افتراضي" : "Default"}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sort"
                checked={filters.sort === "title"}
                onChange={() => onFilterChange({ sort: "title" })}
                className="mr-2 rtl:mr-0 rtl:ml-2"
              />
              <span className="text-sm text-gray-600">
                {locale === "ar" ? "الاسم" : "Name"}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sort"
                checked={filters.sort === "price"}
                onChange={() => onFilterChange({ sort: "price" })}
                className="mr-2 rtl:mr-0 rtl:ml-2"
              />
              <span className="text-sm text-gray-600">
                {locale === "ar" ? "السعر" : "Price"}
              </span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}