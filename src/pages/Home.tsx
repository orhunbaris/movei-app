import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setCurrentPage, setTotalPages } from '../redux/movieSlice';
import { fetchMovies } from '../utils/fetch-movies'; 
import MovieGrid from '../components/MovieGrid'; 
import Pagination from '../components/Pagination';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);
  const currentPage = useSelector((state: any) => state.movies.currentPage);
  const totalPages = useSelector((state: any) => state.movies.totalPages);
  const [searchQuery, setSearchQuery] = useState('Pokemon');
  const [type, setType] = useState('movie');
  const [releaseYear, setReleaseYear] = useState('');

  const fetchMovieData = async () => {
    try {
      const data = await fetchMovies(searchQuery, currentPage, type, releaseYear);
      dispatch(setMovies(data.Search || []));
      dispatch(setTotalPages(Math.ceil(Number(data.totalResults) / 10)));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const handleSearchClick = () => {
    fetchMovieData();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Movies"
        />
        <button onClick={handleSearchClick}>Search</button>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
        />
      </div>
      <MovieGrid movies={movies} /> {/* Corrected to MovieGrid */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
};

export default Home;
