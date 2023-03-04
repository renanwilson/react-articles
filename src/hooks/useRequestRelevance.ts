import { useListContext } from "contexts/ListContext";
import { useSearchContext } from "contexts/SearchContext";
import { apiRelevance } from "services/api";

export const useRequestRelevance = () => {
  const { setList } = useListContext();
  const { search } = useSearchContext();

  const requestRelevance = () => {
    apiRelevance(search, setList);
  };
  return {
    requestRelevance,
  };
};
