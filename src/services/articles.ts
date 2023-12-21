import { Article } from "../../types";

export const articlesService = {
  update: async (article: Article) => {
    return window.fetch(`/api/articles/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
  },

  all: async () => {
    const res = await window.fetch(`/api/articles`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return (await res.json()) as Article[];
  },

  get: async (id: string) => {
    const res = await window.fetch(`/api/articles/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return (await res.json()) as Article;
  },

  create: (article: Omit<Article, "id">) => {
    return window.fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
  },
};
