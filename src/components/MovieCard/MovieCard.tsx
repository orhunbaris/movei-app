import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.scss';

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const posterUrl =
    movie.Poster && movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/300x450?text=No+Image'; 

  const handleCardClick = () => {
    navigate(`/details/${movie.imdbID}`);
  };

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${posterUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={handleCardClick}
    >
      <div className="movie-card-content">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
