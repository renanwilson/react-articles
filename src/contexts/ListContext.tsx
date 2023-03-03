import { IListArticles } from "Interfaces/IListArticles";
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const INITIAL_STATE_LIST: IListArticles = {
  data: [
    {
      id: 0,
      title: "",
      headline: "",
      featured_media: {
        "mid-size": "",
      },
      categories: [{ name: "" }],
    },
  ],
  size: 0,
  pages: 0,
};

type ListContextProps = {
  list: IListArticles;
  setList: Dispatch<SetStateAction<IListArticles>>;
};
type ListContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: ListContextProps = {
  list: INITIAL_STATE_LIST,
  setList: () => {},
};

export const ListContext = createContext<ListContextProps>(INITIAL_STATE);

export const useListContext = () => useContext(ListContext);

export const ListContextProvider = ({ children }: ListContextProviderProps) => {
  const [list, setList] = useState(INITIAL_STATE_LIST);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
