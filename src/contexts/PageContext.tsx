import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type PageContextProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};
type PageContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE_PAGE: PageContextProps = {
  page: 1,
  setPage: () => {},
};

export const PageContext = createContext(INITIAL_STATE_PAGE);

export const usePageContext = () => useContext(PageContext);

export const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
