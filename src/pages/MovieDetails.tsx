import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/fetch-movie-detail';
import MovieDetail from '../components/MovieDetail/MovieDetail';

const MovieDetailPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<any | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchMovieDetails(imdbID!);
      setMovie(data);
    };

    fetchDetail();
  }, [imdbID]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-page">
      <MovieDetail movie={movie} />
    </div>
  );
};

export default MovieDetailPage;