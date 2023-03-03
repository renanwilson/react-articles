import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "pages/Home/Home";

import { lazy } from "react";
import SearchList from "pages/SearchList/SearchList";
import Article from "pages/Article/Article";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchList />} path="/search_list" />
        <Route element={<Article />} path="/article/:id" />
      </Routes>
    </BrowserRouter>
  );
};
