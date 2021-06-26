import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";
export default function Item({ movie }) {
  return (
    <Card
      className="shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: "14rem", marginTop: "10px", minHeight: "27rem" }}
    >
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Link
          href={`/movies/${movie.imdbID}`}
          className="text-decoration-none"
        >
          {movie.Title}
        </Card.Link>
        <Card.Subtitle className="blockquote-footer">
          <p>Year:{movie.Year}</p>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
