import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
}

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <Link to={`/movie/${movie.imdbID}`}>
            <h3>{movie.Title} ({movie.Year})</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
