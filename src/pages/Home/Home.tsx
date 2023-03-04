import { Header } from "components/Header/Header";
import { SearchSection } from "components/SearchSection/SearchSection";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bem vindo!</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <SearchSection title="Pesquise algo para iniciar" />
    </>
  );
}
