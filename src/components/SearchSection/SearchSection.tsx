import { SearchInput } from "components/SearchInput/SearchInput";
import React from "react";

type SearchSectionProps = {
  title: string;
};
export function SearchSection({ title }: SearchSectionProps) {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full m-1 mt-10 border-2 p-10 flex flex-col gap-10 lg:rounded lg:items-center lg:w-1/2">
          <h1 className="text-3xl font-bold font-normal">{title}</h1>
          <SearchInput />
        </div>
      </div>
    </>
  );
}
