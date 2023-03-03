import { usePageContext } from "contexts/PageContext";
import React, { useState } from "react";
import { useRequestsApi } from "utils/RequestApi";

export function NextPageButton() {
  const { page, setPage } = usePageContext();
  const { requestOnButton } = useRequestsApi();

  return (
    <>
      <button
        onClick={() => {
          setPage(page + 1);
          requestOnButton();
        }}
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        Próxima página
      </button>
    </>
  );
}
export function PreviousPagButton() {
  const { page, setPage } = usePageContext();
  const { requestOnButton } = useRequestsApi();

  return (
    <>
      <button
        onClick={() => {
          setPage(page - 1);
          requestOnButton();
        }}
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        Página Anterior
      </button>
    </>
  );
}
