import { PaginationContent } from "components/PaginationContent/PaginationContent";
import { useListContext } from "contexts/ListContext";
import React, { useState } from "react";
import { useRequestsApi } from "hooks/useRequestApi";
import { useRequestRelevance } from "hooks/useRequestRelevance";
import { ArticleCards } from "./ArticleCard/ArticleCard";

export function ArticleCardsSection() {
  const { requestRelevance } = useRequestRelevance();
  const { requestOnButton } = useRequestsApi();
  const [relevance, setRelevance] = useState(false);
  const { list } = useListContext();

  return list.pages === 0 ? (
    <div className="flex item-center justify-center my-2">
      <h1 className="text-3xl font-extrabold font-normal">
        Não existem artigos relacionados ao termo pesquisado!
      </h1>
    </div>
  ) : (
    <>
      <div className="lg:flex lg:items-center lg:w-full lg:flex-col mb-10">
        <div className="w-full flex flex-col gap-1 py-10 items-center lg:justify-between lg:flex-row lg:items-end lg:w-1/2 ">
          <h1 className="text-2xl font-extrabold font-normal">
            {list.size} Artigos encontrados
          </h1>
          <div className="flex gap-2">
            <button
              className={
                relevance
                  ? "bg-blue-900 text-white py-2 px-4 rounded"
                  : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              }
              onClick={() => {
                requestRelevance();
                setRelevance(true);
              }}
            >
              Ordenar por relevância
            </button>
            <button
              className={
                relevance === false
                  ? "bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              }
              onClick={() => {
                requestOnButton();
                setRelevance(false);
              }}
            >
              Ordem normal
            </button>
          </div>
        </div>
        {list && (
          <>
            {list.data.map((item) => {
              return <ArticleCards item={item} key={item.id} />;
            })}
            <div className="flex gap-5 flex-col lg:flex-row lg:gap-10 justify-between items-center lg:w-1/2 lg:justify-center">
              <div className="flex gap-5 lg:gap-10">
                <PaginationContent />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
