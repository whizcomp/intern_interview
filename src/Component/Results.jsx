import React from "react";
import Item from "./Card";

export default function Results({ movies: mov }) {
  let movies = mov;
  console.log(movies);
  if (movies === undefined || movies.length === 0)
    return <h1 className="text-center pt-5">No movies</h1>;
  return (
    <div>
      <div className="row">
        {movies.map(movie => (
          <div className="col mt-3">
            <Item movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
