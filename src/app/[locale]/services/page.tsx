import ServicesContent from "@/components/sections/ServicesContent";
import { getPaginatedServices } from "@/lib/services";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps) {
  const { locale } = await params;

  return {
    title: locale === "ar" ? "خدماتنا" : "Our Services",
    description:
      locale === "ar"
        ? "اكتشف مجموعة واسعة من الخدمات المهنية التي نقدمها"
        : "Discover our wide range of professional services",
  };
}

export default async function ServicesPage({
  params,
  searchParams,
}: ServicesPageProps) {
  const { locale } = await params;
  const { page } = await searchParams;

  const currentPage = parseInt(page || "1", 10);
  const servicesPerPage = 6;

  const { services, totalPages, totalServices } = getPaginatedServices(
    locale,
    currentPage,
    servicesPerPage
  );

  return (
    <ServicesContent
      services={services}
      totalPages={totalPages}
      currentPage={currentPage}
      totalServices={totalServices}
      locale={locale}
    />
  );
}
