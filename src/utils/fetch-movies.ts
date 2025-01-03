interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
}

interface FetchMoviesResponse {
  Search: Movie[];
  totalResults: string;
}

export const fetchMovies = async (
  searchQuery: string,
  page: number = 1,
  type: string = 'movie',
  releaseYear: string = ''
): Promise<FetchMoviesResponse> => {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;
  const baseUrl = process.env.REACT_APP_OMDB_BASE_URL;

  const url = `${baseUrl}?s=${searchQuery}&page=${page}&type=${type}&y=${releaseYear}&apikey=${apiKey}`;
  console.log("Fetching movies...")
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  if (data.Response === 'False') {
    throw new Error(data.Error || 'No movies found');
  }

  return data;
};