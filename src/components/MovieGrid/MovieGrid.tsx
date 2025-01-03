import React from "react";
import { Link } from "react-router-dom";
import "./MovieGrid.scss";
import MovieCard from "../MovieCard/MovieCard";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">

            <MovieCard
              movie={{
                imdbID: movie.imdbID,
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster
              }}
            />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
