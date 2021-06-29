import React from "react";
import { Route, Link } from "wouter";

import "./App.css";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import Trending from "./components/Trending/index";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "roku_js",
        programmer: true,
      }}
    >
      <div className="App-content">
        <div className="text-center py-16 col-start-1 col-end-4">
          <Link to="/">
            <h1 className="text-yellow-500 font-bold text-6xl w-72 mx-auto cursor-pointer">
              Gif store
            </h1>
          </Link>
        </div>
        <section className="flex flex-wrap flex-row justify-center">
          <GifsContextProvider>
            <Route component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route component={Detail} path="/gif/:id" />
            <Route component={Trending} path="/trends" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
