import React from "react";
import { RoutesApp } from "routes/Routes";
import "index.css";
import { ListContextProvider } from "contexts/ListContext";
import { SearchContextProvider } from "contexts/SearchContext";
import { PaginationContextProvider } from "contexts/PaginationContext";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <SearchContextProvider>
          <PaginationContextProvider>
            <RoutesApp />
          </PaginationContextProvider>
        </SearchContextProvider>
      </ListContextProvider>
    </div>
  );
}

export default App;
