import React from "react";
import { RoutesApp } from "routes/Routes";
import "index.css";
import { ListContextProvider } from "contexts/ListContext";
import { SearchContextProvider } from "contexts/SearchContext";
import { PageContextProvider } from "contexts/PageContext";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <SearchContextProvider>
          <PageContextProvider>
            <RoutesApp />
          </PageContextProvider>
        </SearchContextProvider>
      </ListContextProvider>
    </div>
  );
}

export default App;
