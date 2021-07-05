import React, { Suspense } from "react";
import { Route, Link, Switch } from "wouter";

import "./App.css";

import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import Trending from "./components/Trending/index";
import { GifsContextProvider } from "./context/GifsContext";
import PageError from "pages/PageError";

const HomePage = React.lazy(() => import("./pages/Home"));

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
        <Suspense fallback={null}>
          <section className="block">
            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route component={SearchResults} path="/search/:keyword" />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Trending} path="/trends" />
                <Route component={PageError} />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
