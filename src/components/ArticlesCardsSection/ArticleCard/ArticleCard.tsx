import { useNavigate } from "react-router-dom";

type ArticleProps = {
  item: {
    id: number;
    title: string;
    headline: string;
    featured_media: {
      "mid-size": string;
    };
    categories: [{ name: string }];
  };
};
export function ArticleCards({ item }: ArticleProps) {
  const navigate = useNavigate();
  return item.featured_media !== null ? (
    <div
      className="flex flex-col gap-10 lg:flex-row lg:gap-10 lg:w-1/2 my-8 "
      onClick={() => navigate(`/article/${item.id}`)}
      role="button"
    >
      <img
        src={item.featured_media["mid-size"]}
        alt=""
        className="w-full lg:max-w-[15rem]"
      />
      <div className="flex flex-col gap-1 p-1 lg:justify-between">
        <p className="font-normal text-blue-400">{item.categories[0].name}</p>
        <h1 className="text-2xl font-extrabold font-normal">{item.title}</h1>
        <p className="font-normal">{item.headline}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}
