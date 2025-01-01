import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

interface MovieGridProps {
    movies: any
}

const MovieGrid: React.FC<MovieGridProps> = () => {
  const movies = useSelector((state: any) => state.movies.movies);

  return (
    <div className="movie-grid">
      {movies.map((movie: any) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;