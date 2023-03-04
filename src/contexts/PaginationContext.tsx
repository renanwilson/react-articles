import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type PaginationContextProps = {
  pagination: number;
  setPagination: Dispatch<SetStateAction<any>>;
};
type PaginationContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE_PAGINATION: PaginationContextProps = {
  pagination: 1,
  setPagination: () => {},
};

export const PaginationContext = createContext(INITIAL_STATE_PAGINATION);

export const usePaginationContext = () => useContext(PaginationContext);

export const PaginationContextProvider = ({
  children,
}: PaginationContextProviderProps) => {
  const [pagination, setPagination] = useState(1);
  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>
      {children}
    </PaginationContext.Provider>
  );
};
