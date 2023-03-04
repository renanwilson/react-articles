import { Pagination } from "@mui/material";
import { useListContext } from "contexts/ListContext";
import { usePageContext } from "contexts/PageContext";
import { useSearchContext } from "contexts/SearchContext";
import React, { ChangeEvent, useEffect } from "react";
import { RequestApi } from "services/api";

export function PaginationContent() {
  const { page, setPage } = usePageContext();
  const { setList } = useListContext();
  const { search } = useSearchContext();

  const handleChange = (event: ChangeEvent<unknown>, value: unknown) => {
    setPage(value);
  };

  useEffect(() => {
    RequestApi(search, setList, page);
  }, [search, setList, page]);

  const { list } = useListContext();
  return (
    <>
      <Pagination count={list.pages} onChange={handleChange} />
    </>
  );
}
