import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SearchContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
const INITIAL_STATE: SearchContextProps = {
  search: "",
  setSearch: () => "",
};
type SearchContextProviderProps = {
  children: ReactElement;
};
export const SearchContext = createContext(INITIAL_STATE);
export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
