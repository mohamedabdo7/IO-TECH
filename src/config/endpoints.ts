export const endpoints = {
  articles: {
    categories: "/user/article_categories",
    byCategory: (slug: string) => `/user/articles_by_category_slug/${slug}`,
    bySlug: (slug: string) => `/user/article_by_slug/${slug}`,
    search: (searchTerm: string) =>
      `/user/articles?search=${encodeURIComponent(searchTerm)}`,
  },
  auth: {
    login: "/user/login",
    register: "/user/register",
    verify: "/user/verify",
  },
  home: "/user/home_pluck_apis",
  about: "/user/about",
  aboutFifthEdition: "/user/about_25",
  events: {
    list: "/user/events",
    bySlug: (slug: string) => `/user/event_by_slug/${encodeURIComponent(slug)}`,
  },
  lectures: {
    list: "/user/lectures",
    bySlug: (slug: string) =>
      `/user/lecture_by_slug/${encodeURIComponent(slug)}`,
  },
  pictionary: {
    list: "/user/photos",
    bySlug: (slug: string) => `/user/photo_by_slug/${encodeURIComponent(slug)}`,
  },
  flashcards: {
    categories: "/user/flashcards_categories",
    byCategory: (categorySlug: string, page: number = 1) =>
      `/user/flashcards_by_category_slug/${encodeURIComponent(
        categorySlug
      )}?page=${page}`,
  },
  powerPoints: {
    categories: "/user/power_point_categories",
    byCategory: (categorySlug: string) =>
      `/user/power_points_by_category_slug/${encodeURIComponent(categorySlug)}`,
    bySlug: (powerPointSlug: string) =>
      `/user/power_point_by_slug/${encodeURIComponent(powerPointSlug)}`,
    search: (searchTerm: string) =>
      `/user/power_points?search=${encodeURIComponent(searchTerm)}`,
  },
  protocols: {
    categories: "/user/protocol_categories",
    byCategory: (categorySlug: string) =>
      `/user/protocols_by_category_slug/${encodeURIComponent(categorySlug)}`,
    bySlug: (protocolSlug: string) =>
      `/user/protocol_by_slug/${encodeURIComponent(protocolSlug)}`,
    categoryBySlug: (categorySlug: string) =>
      `/user/protocol_category_by_slug/${encodeURIComponent(categorySlug)}`,
    search: (searchTerm: string) =>
      `/user/protocols?search=${encodeURIComponent(searchTerm)}`,
  },
  essentials: {
    sections: "/user/book/the-essentials-5th-edition/sections",
    chapters: (sectionSlug: string) =>
      `/user/book/the-essentials-5th-edition/section/${encodeURIComponent(
        sectionSlug
      )}/chapters`,
    lessons: (sectionSlug: string, chapterSlug: string) =>
      `/user/book/the-essentials-5th-edition/section/${encodeURIComponent(
        sectionSlug
      )}/chapter/${encodeURIComponent(chapterSlug)}/lessons`,
    lessonDetail: (
      sectionSlug: string,
      chapterSlug: string,
      lessonSlug: string
    ) =>
      `/user/book/the-essentials-5th-edition/section/${encodeURIComponent(
        sectionSlug
      )}/chapter/${encodeURIComponent(chapterSlug)}/lesson/${encodeURIComponent(
        lessonSlug
      )}`,
  },
  handbook: {
    sections: "/user/book/the-handbook/sections",
    chapters: (sectionSlug: string) =>
      `/user/book/the-handbook/section/${encodeURIComponent(
        sectionSlug
      )}/chapters`,
    lessons: (sectionSlug: string, chapterSlug: string) =>
      `/user/book/the-handbook/section/${encodeURIComponent(
        sectionSlug
      )}/chapter/${encodeURIComponent(chapterSlug)}/lessons`,
    lessonDetail: (
      sectionSlug: string,
      chapterSlug: string,
      lessonSlug: string
    ) =>
      `/user/book/the-handbook/section/${encodeURIComponent(
        sectionSlug
      )}/chapter/${encodeURIComponent(chapterSlug)}/lesson/${encodeURIComponent(
        lessonSlug
      )}`,
  },
  policy: {
    privacy: "/user/policy",
    terms: "/user/terms",
  },
  exams: {
    list: "/user/exams",
    details: (examId: string) => `/user/exams/${examId}`,
    question: (questionId: string) => `/user/get_exam_question/${questionId}`,
    submitQuestion: "/user/submit_question",
    submitExam: "/user/submit_exam",
    checkAnswer: (answerId: string) =>
      `/user/check_is_answer_correct/${answerId}`,
    flagQuestion: "/user/flag_question",
    pauseExam: "/user/pause_exam",
    results: (examId: string) => `/user/exams/${examId}`,
  },
  search: {
    global: "/user/new_search",
  },
  articlesAlerts: {
    list: "/user/alerts",
    bySlug: (slug: string) => `/user/alert_by_slug/${encodeURIComponent(slug)}`,
  },
} as const;
