import "./styles.css";
import { IArticle } from "Interfaces/IArticle";

type ArticleDetailsProps = {
  article: IArticle;
};
export function ArticleDetails({ article }: ArticleDetailsProps) {
  const data = new Date(article.published);

  return (
    <>
      <div className="w-full flex flex-col p-1 gap-14 my-10 lg:justify-center lg:flex-row ">
        <div className="conteudo lg:w-2/5">
          <h1 className="text-[38px] font-[700] font-normal text-[#337e93]">
            {article.title}
          </h1>
          <p>{article.headline}</p>
          {article.tags.length === 1 ? (
            <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
              {article.tags[0].name}
            </div>
          ) : null}

          <img src={article.featured_media.medium_large} alt="" />
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="conteudo"
          />
          <details>
            <summary className="font-normal text-[#337e93]">
              Bibliografia
            </summary>
            <div
              dangerouslySetInnerHTML={{ __html: article.bibliography }}
              className="w-full bibliography"
            />
          </details>
        </div>
        <div className="flex flex-col gap-10 lg:w-1/4 ">
          <div className="flex justify-between items-center border-l-2 border-blue-600 pl-5">
            <img
              src={article.author.picture}
              className="rounded-[22px] max-w-[5rem]"
              alt={article.author.name}
            />
            <div>
              <p className="font-normal">
                Artigo Publicado em: {data.toLocaleDateString()}
              </p>
              <p className="font-normal">Autor: {article.author.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
