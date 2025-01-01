import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface MovieState {
  movies: Array<any>;
  currentPage: number;
  totalPages: number;
  searchQuery: string;
}

const initialState: MovieState = {
  movies: [],
  currentPage: 1,
  totalPages: 1,
  searchQuery: 'default', 
};


const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<any[]>) => {
        state.movies = action.payload; 
      },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setMovies, setCurrentPage, setTotalPages, setSearchQuery } = movieSlice.actions;

export default movieSlice.reducer;
