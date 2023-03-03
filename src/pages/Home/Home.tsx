import { Header } from "components/Header/Header";
import { SearchSection } from "components/SearchSection/SearchSection";
import React from "react";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Bem vindo!</title>
      </Helmet>
      <Header />
      <SearchSection title="Pesquise algo para iniciar" />
    </>
  );
}
