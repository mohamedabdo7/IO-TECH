export const routes = {
  home: (locale: string) => `/${locale}`,
  login: (locale: string) => `/${locale}/login`,
  register: (locale: string) => `/${locale}/register`,
  dashboard: (locale: string) => `/${locale}/dashboard`,
  profile: (locale: string) => `/${locale}/profile`,
  settings: (locale: string) => `/${locale}/settings`,
  signup: (locale: string) => `/${locale}/register`,

  // Main navigation routes
  essentials: (locale: string) => `/${locale}/essentials`,
  handbook: (locale: string) => `/${locale}/handbook`,
  articles: (locale: string) => `/${locale}/articles`,
  powerPoints: (locale: string) => `/${locale}/power-points`,
  protocols: (locale: string) => `/${locale}/protocols`,

  // Articles sub-routes
  articlesSummaries: (locale: string) => `/${locale}/articles-summaries`,
  articlesAlerts: (locale: string) => `/${locale}/articles-alerts`,

  // Protocols sub-routes
  protocolsSummaries: (locale: string) => `/${locale}/protocols`,

  // PowerPoints sub-routes
  powerPointsSummaries: (locale: string) => `/${locale}/power-points`,

  // More dropdown routes
  mcqs: (locale: string) => `/${locale}/mcqs/exams`,
  privacyPolicy: (locale: string) => `/${locale}/privacy-policy`,
  lectures: (locale: string) => `/${locale}/lectures`,
  pictionary: (locale: string) => `/${locale}/pictionary`,
  policies: (locale: string) => `/${locale}/policies`,
  events: (locale: string) => `/${locale}/events`,
  urgentCare: (locale: string) => `/${locale}/book/urgent-care-manual`,
  antimicrobial: (locale: string) => `/${locale}/book/phc-antimicrobial-manual`,
  osceMastery: (locale: string) => `/${locale}/book/osce-mastery`,
  flashcards: (locale: string) => `/${locale}/flashcards`,
  about: (locale: string) => `/${locale}/about-us`,
  volunteers: (locale: string) => `/${locale}/volunteers`,
  volunteersFifthEdition: (locale: string) =>
    `/${locale}/volunteers-fifth-edition`,
  createBadge: (locale: string) => `/${locale}/create-badge`,

  // Exam routes
  examCreate: (locale: string) => `/${locale}/mcqs/exam/create`,
  examTake: (locale: string, examId: string) =>
    `/${locale}/mcqs/exam/${examId}`,
} as const;

// Helper function للحصول على الـ locale الحالي
export const getLocalizedRoute = (
  route: keyof typeof routes,
  locale: string,
  ...args: any[]
) => {
  const routeFunction = routes[route] as any;
  return routeFunction(locale, ...args);
};
