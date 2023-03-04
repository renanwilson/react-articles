import { useListContext } from "contexts/ListContext";
import { useSearchContext } from "contexts/SearchContext";
import { useCallback } from "react";
import { RequestApi } from "services/api";
import { useNavigate } from "react-router-dom";
import { usePageContext } from "contexts/PageContext";

export const useRequestsApi = () => {
  const navigate = useNavigate();
  const { setList } = useListContext();
  const { search } = useSearchContext();
  const { page } = usePageContext();
  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        navigate("/search_list");
        RequestApi(search, setList, page);
      }
    },
    [search, setList, navigate, page]
  );
  const requestOnButton = () => {
    RequestApi(search, setList, page);
  };
  return {
    handleInput,
    requestOnButton,
  };
};
