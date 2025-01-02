import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setCurrentPage, setTotalPages } from '../redux/movieSlice';
import { fetchMovies } from '../utils/fetch-movies';
import MovieGrid from '../components/MovieGrid';
import Pagination from '../components/Pagination';
import TypeSelector from '../components/TypeSelector';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);
  const currentPage = useSelector((state: any) => state.movies.currentPage);
  const totalPages = useSelector((state: any) => state.movies.totalPages);
  const [searchQuery, setSearchQuery] = useState('Pokemon');
  const [type, setType] = useState('movie');
  const [releaseYear, setReleaseYear] = useState('');
  const [error, setError] = useState<string | null>(null); // For error handling

  const fetchMovieData = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a movie name to search.');
      return;
    }
    
    try {
      setError(null); // Reset error when search starts
      const data = await fetchMovies(searchQuery, currentPage, type, releaseYear);
      dispatch(setMovies(data.Search || []));
      dispatch(setTotalPages(Math.ceil(Number(data.totalResults) / 10)));
    } catch (error) {
      setError('Failed to fetch movies. Please try again.');
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchMovieData();
    }
  }, [currentPage, type, releaseYear]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Movies"
        />
        <button onClick={fetchMovieData} disabled={!searchQuery.trim()}>
          Search
        </button>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TypeSelector type={type} onTypeChange={(newType) => setType(newType)} />
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
};

export default Home;