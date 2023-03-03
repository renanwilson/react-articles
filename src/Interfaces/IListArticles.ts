export interface IListArticles {
  data: [
    {
      id: number;
      title: string;
      headline: string;
      featured_media: {
        "mid-size": string;
      };
      categories: [
        {
          name: string;
        }
      ];
    }
  ];
  pages: number;
  size: number;
}
