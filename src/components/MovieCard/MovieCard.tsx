import React from "react";

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>IMDb ID: {movie.imdbID}</p>
    </div>
  );
};

export default MovieCard;
