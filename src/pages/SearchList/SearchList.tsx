import { ArticleCardsSection } from "components/ArticlesCardsSection/ArticleCardsSection";
import { Header } from "components/Header/Header";
import { SearchSection } from "components/SearchSection/SearchSection";
import { useSearchContext } from "contexts/SearchContext";
import { INITIAL_STATE_LIST, useListContext } from "contexts/ListContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

import React from "react";
import { LoadingSpinner } from "components/LoadingSpinner/LoadingSpinner";

export default function SearchList() {
  const { search } = useSearchContext();
  const SEARCH_SECTION_TITLE = `Resultados para "${search}"`;
  const { list } = useListContext();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="UTF-8" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <SearchSection title={SEARCH_SECTION_TITLE} />
      {list !== INITIAL_STATE_LIST ? (
        <ArticleCardsSection />
      ) : (
        <div className="flex justify-around items-center h-[50vh]">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}
