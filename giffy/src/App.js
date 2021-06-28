import React from "react";
import { Route, Link } from "wouter";

import "./App.css";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "roku_js",
        programmer: true,
      }}
    >
      <div className="App App-content">
        <Link to="/">
          <div className="w-full text-center">
            <h1 className="text-yellow-500 font-bold text-6xl py-16">
              Gif store
            </h1>
          </div>
        </Link>
        <section className="flex flex-wrap flex-row justify-center">
          <GifsContextProvider>
            <Route component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
