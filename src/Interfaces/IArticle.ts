export interface IArticle {
  content: string;
  title: string;
  published: string;
  headline: string;
  featured_media: {
    medium_large: string;
  };
  bibliography: string;
  categories: [{ name: string }];
  author: { name: string; picture: string; description: "" };
  metas: {
    title: string;
    description: string;
    robots: string;
    "og:title": string;
    "og:description": string;
    "og:type": string;
    "og:site_name": string;
    "og:image": string;
    "google-site-verification": string;
  };
  tags: [{ name: string }];
}
