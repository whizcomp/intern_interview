import React, { useEffect } from "react";
import { getDetails } from "../Services/backend";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
export default function MovieDetails(props) {
  let { id } = useParams();

  const [movie, setMovie] = React.useState({});
  const getMovies = async id => {
    const { data } = await getDetails(id);

    setMovie(data);
  };
  useEffect(() => {
    getMovies(id);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row  mt-3">
        <div className="col-lg-3 col-md-3 col- p-3 order-3 ">
          <h5 className="text-dark">Genre</h5>
          <p className="text-muted">{movie.Genre}</p>
          <h5 className="text-dark">Country</h5>
          <p className="text-muted">{movie.Country}</p>
          <h5 className="text-dark">Awards</h5>
          <p className="text-muted">{movie.Awards}</p>
          <p className="text-muted">Rating: {movie.imdbRating}</p>
        </div>
        <div className="col-lg-6   col-md-6 col-sm-9 shadow-lg p-3 mb-5 bg-white order-lg-2 order-sm-1">
          <h3>{movie.Title}</h3>
          <Card.Img
            variant="top"
            src={movie.Poster}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-lg-3 col-md-3 col- order-1 ">
          <h5 className="text-center pe-2">Plot</h5>
          <p className=" ps-5">{movie.Plot}</p>
          <h5 className="text-center pe-2">Actors</h5>
          <p className=" ps-5 text-muted">{movie.Actors}</p>
        </div>
      </div>
    </div>
  );
}
