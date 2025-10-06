export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  features: string[];
  benefits: string[];
  category: string;
  price?: string;
  duration?: string;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: "title" | "price" | "duration";
}

const servicesData: Record<string, Service[]> = {
  en: [
    {
      id: 1,
      slug: "web-development",
      title: "Web Development",
      description:
        "Professional web development services using modern technologies",
      content:
        "Our web development service provides comprehensive solutions for businesses looking to establish a strong online presence. We use cutting-edge technologies like React, Next.js, and Node.js to create fast, scalable, and user-friendly websites.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Modern UI/UX",
        "Cross-browser Compatibility",
      ],
      benefits: [
        "Increased Online Visibility",
        "Better User Experience",
        "Higher Conversion Rates",
        "Mobile-friendly Design",
        "Search Engine Friendly",
      ],
      category: "Development",
      price: "$2,500 - $10,000",
      duration: "4-12 weeks",
    },
    {
      id: 2,
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile application development",
      content:
        "We create powerful mobile applications for iOS and Android platforms. Our team specializes in both native development and cross-platform solutions using React Native and Flutter.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      features: [
        "Native iOS & Android",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      benefits: [
        "Reach Mobile Users",
        "Increase Engagement",
        "Brand Recognition",
        "Revenue Generation",
        "Customer Loyalty",
      ],
      category: "Development",
      price: "$5,000 - $25,000",
      duration: "8-20 weeks",
    },
    {
      id: 3,
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description: "Creative and user-centered design solutions",
      content:
        "Our design team creates intuitive and visually appealing interfaces that enhance user experience and drive engagement.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
      benefits: [
        "Better User Experience",
        "Increased Conversions",
        "Brand Consistency",
        "Reduced Development Time",
        "Higher User Satisfaction",
      ],
      category: "Design",
      price: "$1,500 - $8,000",
      duration: "3-8 weeks",
    },
    {
      id: 4,
      slug: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your business",
      content:
        "Our digital marketing services help businesses reach their target audience through various online channels including social media, search engines, and email marketing.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Email Campaigns",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased Brand Awareness",
        "Higher Lead Generation",
        "Better ROI",
        "Targeted Audience Reach",
        "Data-Driven Insights",
      ],
      category: "Marketing",
      price: "$1,000 - $5,000",
      duration: "3-6 months",
    },
    {
      id: 5,
      slug: "e-commerce-solutions",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platform development and management",
      content:
        "We build robust e-commerce platforms that drive sales and provide excellent shopping experiences for your customers.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      features: [
        "Custom Shopping Cart",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking",
        "Mobile Optimization",
      ],
      benefits: [
        "Increased Sales",
        "Better Customer Experience",
        "Automated Processes",
        "Global Reach",
        "24/7 Availability",
      ],
      category: "Development",
      price: "$3,000 - $15,000",
      duration: "6-16 weeks",
    },
    {
      id: 6,
      slug: "cloud-services",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      content:
        "Our cloud services help businesses migrate to the cloud and optimize their infrastructure for better performance and cost efficiency.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Security Configuration",
        "Monitoring & Support",
        "Cost Optimization",
      ],
      benefits: [
        "Reduced Costs",
        "Better Scalability",
        "Enhanced Security",
        "Improved Performance",
        "24/7 Support",
      ],
      category: "Infrastructure",
      price: "$2,000 - $12,000",
      duration: "4-10 weeks",
    },
    {
      id: 7,
      slug: "cybersecurity",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      content:
        "We provide end-to-end cybersecurity services to protect your business from digital threats and ensure data privacy.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      features: [
        "Security Audits",
        "Threat Detection",
        "Data Encryption",
        "Access Control",
        "Incident Response",
      ],
      benefits: [
        "Data Protection",
        "Compliance Assurance",
        "Risk Mitigation",
        "Business Continuity",
        "Customer Trust",
      ],
      category: "Security",
      price: "$1,500 - $8,000",
      duration: "2-8 weeks",
    },
    {
      id: 8,
      slug: "data-analytics",
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      content:
        "Our data analytics services help businesses make informed decisions by analyzing their data and providing meaningful insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Business Intelligence",
        "Custom Dashboards",
        "Real-time Reporting",
      ],
      benefits: [
        "Better Decision Making",
        "Improved Efficiency",
        "Cost Reduction",
        "Competitive Advantage",
        "Growth Opportunities",
      ],
      category: "Analytics",
      price: "$2,500 - $10,000",
      duration: "4-12 weeks",
    },
    {
      id: 9,
      slug: "ai-machine-learning",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      content:
        "We develop AI and machine learning solutions that automate processes and provide intelligent insights for your business.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Automation",
      ],
      benefits: [
        "Process Automation",
        "Improved Accuracy",
        "Cost Savings",
        "Enhanced Customer Experience",
        "Competitive Edge",
      ],
      category: "AI/ML",
      price: "$5,000 - $25,000",
      duration: "8-20 weeks",
    },
  ],
  ar: [
    {
      id: 1,
      slug: "web-development",
      title: "تطوير المواقع الإلكترونية",
      description:
        "خدمات تطوير المواقع الإلكترونية المهنية باستخدام أحدث التقنيات",
      content:
        "تقدم خدمة تطوير المواقع الإلكترونية لدينا حلولاً شاملة للشركات التي تسعى لإنشاء حضور قوي على الإنترنت.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "تصميم متجاوب",
        "تحسين محركات البحث",
        "سرعة تحميل عالية",
        "واجهة مستخدم حديثة",
        "توافق مع جميع المتصفحات",
      ],
      benefits: [
        "زيادة الظهور على الإنترنت",
        "تجربة مستخدم أفضل",
        "معدلات تحويل أعلى",
        "تصميم متوافق مع الهواتف",
        "صديق لمحركات البحث",
      ],
      category: "التطوير",
      price: "$2,500 - $10,000",
      duration: "4-12 أسبوع",
    },
    {
      id: 2,
      slug: "mobile-app-development",
      title: "تطوير تطبيقات الهاتف المحمول",
      description: "تطوير تطبيقات الهاتف المحمول الأصلية ومتعددة المنصات",
      content: "نقوم بإنشاء تطبيقات هاتف محمول قوية لمنصات iOS و Android.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      features: [
        "تطبيقات أصلية لـ iOS و Android",
        "حلول متعددة المنصات",
        "تحسين متجر التطبيقات",
        "الإشعارات الفورية",
        "وظائف بدون اتصال",
      ],
      benefits: [
        "الوصول لمستخدمي الهواتف",
        "زيادة التفاعل",
        "التعرف على العلامة التجارية",
        "توليد الإيرادات",
        "ولاء العملاء",
      ],
      category: "التطوير",
      price: "$5,000 - $25,000",
      duration: "8-20 أسبوع",
    },
    {
      id: 3,
      slug: "ui-ux-design",
      title: "تصميم واجهة وتجربة المستخدم",
      description: "حلول تصميم إبداعية تركز على المستخدم",
      content:
        "يقوم فريق التصميم لدينا بإنشاء واجهات بديهية وجذابة بصري<|im_start|>فذت تجربة المستخدم.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      features: [
        "بحث المستخدم",
        "إنشاء النماذج الأولية",
        "النماذج التفاعلية",
        "التصميم البصري",
        "اختبار سهولة الاستخدام",
      ],
      benefits: [
        "تجربة مستخدم أفضل",
        "زيادة التحويلات",
        "اتساق العلامة التجارية",
        "تقليل وقت التطوير",
        "رضا أعلى للمستخدمين",
      ],
      category: "التصميم",
      price: "$1,500 - $8,000",
      duration: "3-8 أسابيع",
    },
    {
      id: 4,
      slug: "digital-marketing",
      title: "التسويق الرقمي",
      description: "استراتيجيات تسويق رقمي شاملة لنمو أعمالك",
      content:
        "تساعد خدمات التسويق الرقمي لدينا الشركات في الوصول إلى جمهورها المستهدف من خلال قنوات مختلفة عبر الإنترنت.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "تحسين محركات البحث",
        "التسويق عبر وسائل التواصل",
        "تسويق المحتوى",
        "حملات البريد الإلكتروني",
        "التحليلات والتقارير",
      ],
      benefits: [
        "زيادة الوعي بالعلامة التجارية",
        "توليد عملاء محتملين أكثر",
        "عائد استثمار أفضل",
        "الوصول للجمهور المستهدف",
        "رؤى مبنية على البيانات",
      ],
      category: "التسويق",
      price: "$1,000 - $5,000",
      duration: "3-6 أشهر",
    },
    {
      id: 5,
      slug: "e-commerce-solutions",
      title: "حلول التجارة الإلكترونية",
      description: "تطوير وإدارة منصات التجارة الإلكترونية المتكاملة",
      content:
        "نقوم ببناء منصات تجارة إلكترونية قوية تدفع المبيعات وتوفر تجارب تسوق ممتازة لعملائك.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      features: [
        "عربة تسوق مخصصة",
        "تكامل بوابات الدفع",
        "إدارة المخزون",
        "تتبع الطلبات",
        "تحسين للهواتف المحمولة",
      ],
      benefits: [
        "زيادة المبيعات",
        "تجربة عملاء أفضل",
        "عمليات آلية",
        "وصول عالمي",
        "متاح 24/7",
      ],
      category: "التطوير",
      price: "$3,000 - $15,000",
      duration: "6-16 أسبوع",
    },
    {
      id: 6,
      slug: "cloud-services",
      title: "الخدمات السحابية",
      description: "بنية تحتية سحابية قابلة للتوسع وخدمات الهجرة",
      content:
        "تساعد خدماتنا السحابية الشركات في الهجرة إلى السحابة وتحسين بنيتها التحتية للحصول على أداء أفضل وكفاءة في التكلفة.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      features: [
        "الهجرة السحابية",
        "إعداد البنية التحتية",
        "تكوين الأمان",
        "المراقبة والدعم",
        "تحسين التكلفة",
      ],
      benefits: [
        "تقليل التكاليف",
        "قابلية توسع أفضل",
        "أمان محسن",
        "أداء محسن",
        "دعم 24/7",
      ],
      category: "البنية التحتية",
      price: "$2,000 - $12,000",
      duration: "4-10 أسابيع",
    },
    {
      id: 7,
      slug: "cybersecurity",
      title: "الأمن السيبراني",
      description: "حلول أمنية شاملة لحماية أعمالك",
      content:
        "نقدم خدمات أمن سيبراني شاملة لحماية أعمالك من التهديدات الرقمية وضمان خصوصية البيانات.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      features: [
        "تدقيق الأمان",
        "كشف التهديدات",
        "تشفير البيانات",
        "التحكم في الوصول",
        "الاستجابة للحوادث",
      ],
      benefits: [
        "حماية البيانات",
        "ضمان الامتثال",
        "تخفيف المخاطر",
        "استمرارية الأعمال",
        "ثقة العملاء",
      ],
      category: "الأمن",
      price: "$1,500 - $8,000",
      duration: "2-8 أسابيع",
    },
    {
      id: 8,
      slug: "data-analytics",
      title: "تحليل البيانات",
      description: "حول بياناتك إلى رؤى عملية قابلة للتنفيذ",
      content:
        "تساعد خدمات تحليل البيانات لدينا الشركات في اتخاذ قرارات مدروسة من خلال تحليل بياناتها وتقديم رؤى مفيدة.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "تصور البيانات",
        "التحليل التنبؤي",
        "ذكاء الأعمال",
        "لوحات تحكم مخصصة",
        "تقارير فورية",
      ],
      benefits: [
        "اتخاذ قرارات أفضل",
        "كفاءة محسنة",
        "تقليل التكاليف",
        "ميزة تنافسية",
        "فرص نمو",
      ],
      category: "التحليلات",
      price: "$2,500 - $10,000",
      duration: "4-12 أسبوع",
    },
    {
      id: 9,
      slug: "ai-machine-learning",
      title: "الذكاء الاصطناعي والتعلم الآلي",
      description: "حلول ذكية مدعومة بالذكاء الاصطناعي",
      content:
        "نطور حلول الذكاء الاصطناعي والتعلم الآلي التي تؤتمت العمليات وتوفر رؤى ذكية لأعمالك.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      features: [
        "نماذج ذكاء اصطناعي مخصصة",
        "معالجة اللغة الطبيعية",
        "رؤية الحاسوب",
        "التحليل التنبؤي",
        "الأتمتة",
      ],
      benefits: [
        "أتمتة العمليات",
        "دقة محسنة",
        "توفير التكاليف",
        "تجربة عملاء محسنة",
        "ميزة تنافسية",
      ],
      category: "الذكاء الاصطناعي",
      price: "$5,000 - $25,000",
      duration: "8-20 أسبوع",
    },
  ],
};

export function getAllServices(locale: string = "en"): Service[] {
  return servicesData[locale] || servicesData.en;
}

export function getServiceBySlug(
  slug: string,
  locale: string = "en"
): Service | null {
  const services = servicesData[locale] || servicesData.en;
  return services.find((service) => service.slug === slug) || null;
}

export function getServicesByCategory(
  category: string,
  locale: string = "en"
): Service[] {
  const services = servicesData[locale] || servicesData.en;
  return services.filter((service) => service.category === category);
}

export function getPaginatedServices(
  locale: string = "en",
  page: number = 1,
  limit: number = 6
): {
  services: Service[];
  totalPages: number;
  currentPage: number;
  totalServices: number;
} {
  const allServices = getAllServices(locale);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const services = allServices.slice(startIndex, endIndex);

  return {
    services,
    totalPages: Math.ceil(allServices.length / limit),
    currentPage: page,
    totalServices: allServices.length,
  };
}

export function searchServices(
  filters: SearchFilters,
  locale: string = "en"
): Service[] {
  let services = getAllServices(locale);

  // البحث بالنص
  if (filters.query) {
    const query = filters.query.toLowerCase();
    services = services.filter(
      (service) =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.content.toLowerCase().includes(query)
    );
  }

  // فلترة بالفئة
  if (filters.category) {
    services = services.filter(
      (service) => service.category === filters.category
    );
  }

  // فلترة بالسعر
  if (filters.minPrice || filters.maxPrice) {
    services = services.filter((service) => {
      if (!service.price) return false;
      const priceMatch = service.price.match(/\$(\d+(?:,\d+)?)/);
      if (!priceMatch) return false;
      const price = parseInt(priceMatch[1].replace(",", ""));

      if (filters.minPrice && price < filters.minPrice) return false;
      if (filters.maxPrice && price > filters.maxPrice) return false;
      return true;
    });
  }

  // ترتيب النتائج
  if (filters.sort) {
    services.sort((a, b) => {
      switch (filters.sort) {
        case "title":
          return a.title.localeCompare(b.title);
        case "price":
          const priceA =
            a.price?.match(/\$(\d+(?:,\d+)?)/)?.[1]?.replace(",", "") || "0";
          const priceB =
            b.price?.match(/\$(\d+(?:,\d+)?)/)?.[1]?.replace(",", "") || "0";
          return parseInt(priceA) - parseInt(priceB);
        default:
          return 0;
      }
    });
  }

  return services;
}

export function getServiceCategories(locale: string = "en"): string[] {
  const services = getAllServices(locale);
  const categories = [...new Set(services.map((service) => service.category))];
  return categories.filter(Boolean);
}
