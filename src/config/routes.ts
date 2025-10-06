export const routes = {
  home: (locale: string) => `/${locale}`,
  about: (locale: string) => `/${locale}/about`,
  services: (locale: string) => `/${locale}/services`,
  blog: (locale: string) => `/${locale}/blog`,
  team: (locale: string) => `/${locale}/team`,
  contact: (locale: string) => `/${locale}/contact`,
  search: (locale: string) => `/${locale}/search`,
} as const;

// Helper function to get localized route
export const getLocalizedRoute = (
  route: keyof typeof routes,
  locale: string,
  ...args: any[]
) => {
  const routeFunction = routes[route] as any;
  return routeFunction(locale, ...args);
};
