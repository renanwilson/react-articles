import { SearchInput } from "components/SearchInput/SearchInput";
import React from "react";

export function Header() {
  return (
    <header className="flex justify-around m-2">
      <a href="/">
        <h1 className="text-3xl font-bold font-normal">Desafio React</h1>
      </a>
      <SearchInput />
    </header>
  );
}
