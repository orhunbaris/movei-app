import axios from 'axios';

const apiKey = process.env.REACT_APP_OMDB_API_KEY || ''
const baseUrl= process.env.REACT_APP_OMDB_BASE_URL || ''

interface MovieDetail {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Runtime: string;
    Poster: string;
    imdbRating: string;
  }
  
  export const fetchMovieDetails = async (movieId: string): Promise<MovieDetail> => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const baseUrl = process.env.REACT_APP_OMDB_BASE_URL;
  
    const url = `${baseUrl}?i=${movieId}&apikey=${apiKey}`;
  
    console.log("Fetching movie details from:", url);
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
  
    const data = await response.json();
  
    console.log("Response data:", data);
  
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie not found');
    }
  
    return data;
  };