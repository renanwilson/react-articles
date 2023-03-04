import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "pages/Home/Home";

import { lazy, Suspense } from "react";

const ArticlePage = lazy(() => import("pages/Article/Article"));
const SearchListPage = lazy(() => import("pages/SearchList/SearchList"));
export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <Suspense>
              <SearchListPage />
            </Suspense>
          }
          path="/search_list"
        />
        <Route
          element={
            <Suspense>
              <ArticlePage />
            </Suspense>
          }
          path="/article/:id"
        />
      </Routes>
    </BrowserRouter>
  );
};
