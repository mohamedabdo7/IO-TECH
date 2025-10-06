// import SearchContent from "@/components/sections/SearchContent";
import SearchContent from "@/components/sections/SearchContent";
import { searchServices, getServiceCategories } from "@/lib/services";

interface SearchPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    query?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ params }: SearchPageProps) {
  const { locale } = await params;

  return {
    title: locale === "ar" ? "البحث في الخدمات" : "Search Services",
    description:
      locale === "ar"
        ? "ابحث عن الخدمات التي تحتاجها"
        : "Find the services you need",
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: SearchPageProps) {
  const { locale } = await params;
  const {
    query,
    category,
    minPrice,
    maxPrice,
    sort,
    page = "1",
  } = await searchParams;

  const filters = {
    query,
    category,
    minPrice: minPrice ? parseInt(minPrice) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
    sort: sort as "title" | "price" | "duration" | undefined,
  };

  const allResults = searchServices(filters, locale);
  const categories = getServiceCategories(locale);

  // Pagination
  const currentPage = parseInt(page);
  const servicesPerPage = 6;
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const services = allResults.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allResults.length / servicesPerPage);

  return (
    <SearchContent
      services={services}
      categories={categories}
      totalResults={allResults.length}
      totalPages={totalPages}
      currentPage={currentPage}
      filters={filters}
      locale={locale}
    />
  );
}
