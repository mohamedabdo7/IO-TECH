import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { getAllServices, getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug, locale } = await params;
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug, locale } = await params;
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
