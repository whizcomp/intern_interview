import React from "react";

import Navbar from "./Component/Navbar";
import Search from "./Component/Search";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./Component/MovieDetails";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
