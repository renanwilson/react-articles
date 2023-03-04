import { Pagination } from "@mui/material";
import { useListContext } from "contexts/ListContext";
import { usePaginationContext } from "contexts/PaginationContext";
import { useSearchContext } from "contexts/SearchContext";
import React, { ChangeEvent, useEffect } from "react";
import { RequestApi } from "services/api";

export function PaginationContent() {
  const { pagination, setPagination } = usePaginationContext();
  const { setList } = useListContext();
  const { search } = useSearchContext();

  const handleChange = (event: ChangeEvent<unknown>, value: unknown) => {
    setPagination(Number(value));
  };

  useEffect(() => {
    RequestApi(search, setList, pagination);
  }, [search, setList, pagination]);

  const { list } = useListContext();
  return (
    <>
      <Pagination
        count={list.pages}
        onChange={handleChange}
        page={pagination}
      />
    </>
  );
}
