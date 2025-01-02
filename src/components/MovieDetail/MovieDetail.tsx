import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../../utils/fetch-movie-detail";

interface MovieDetailProps {
  movie: {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Runtime: string;
    Poster: string;
    imdbRating: string;
  };
}

const MovieDetail: React.FC<MovieDetailProps> = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchMovieDetails(imdbID!);
      setMovie(data);
    };
    fetchDetail();
  }, [imdbID]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <p>{movie.Runtime}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Director}</p>
      <p>{movie.Actors}</p>
      <p>IMDb Rating: {movie.imdbRating}</p>
      <p>{movie.Plot}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetail;
