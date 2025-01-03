
# Movie Search App

This is a web application built with **React** and **TypeScript** that allows users to search for **movies**, **TV series**, and **TV episodes**. The app integrates with the [OMDb API](http://www.omdbapi.com/) to fetch movie and TV data. Users can search for these by title, and the app provides a detailed view for each result. 

The app supports filters such as movie type (movie, series, episode), and release year. The search is based on a keyword in the title, so users can search for specific words within movie, series, or episode titles.

## Features

- **Search for Movies, TV Series, or Episodes**: Users can search for movies, TV series, or individual TV episodes by title. The search matches the keyword against the movie, series, or episode title.
- **Filters**: The app allows filtering by:
  - **Movie Type**: Movie, Series, or Episode
  - **Release Year**: Filter movies and TV shows by year.
- **Movie/TV Details**: Clicking on a result takes the user to a detailed page displaying additional information, including title, genre, actors, director, IMDb rating, and more.
- **Error Handling**: Custom error messages are displayed when no results are found or when there is an issue fetching data.

## Tech Stack

- **Frontend**: React, TypeScript, SCSS, Redux for state management
- **API**: OMDb API for fetching movie and TV data
- **Styling**: SCSS for component-level styling
- **Routing**: React Router for navigation between the homepage and the detailed view page

## Features Breakdown

1. **Movie/TV Search**:
    - Search for movies, TV series, or episodes by title.
    - Displays results relevant to the search keyword.
    - The search matches the keyword in the title of the movie, series, or episode.

2. **Type and Year Filters**:
    - Filter results by **type** (Movie, Series, Episode).
    - Filter by **release year** using a dropdown with a range of years (2025–1900).

3. **Movie/TV Details**:
    - Each result has a detailed page with information such as title, genre, director, actors, IMDb rating, plot, and runtime.

4. **Responsive Design**:
    - The app is fully responsive and adjusts to different screen sizes, providing a smooth user experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app in your browser.
2. Use the search bar to search for movies, TV series, or episodes by title. By default, the search term is "Pokemon".
3. Filter the results by movie/TV type and release year.
4. Click on any result to view detailed information about the movie, series, or episode.

## Folder Structure

The project follows a modular folder structure for better maintainability and readability.

- `src/`
  - `components/` - Reusable components such as `MovieGrid`, `SearchBar`, `TypeSelector`, and `MovieDetail`.
  - `pages/` - Pages such as `Home` and `MovieDetails` that handle routing.
  - `redux/` - Redux store and slices for managing the state of movies, pagination, and search.
  - `utils/` - Utility functions such as `fetchMovies` and `fetchMovieDetails` to interact with the OMDb API.
  - `styles/` - SCSS files for styling components and pages.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing the movie and TV data.
- [React](https://reactjs.org/) for making web development easier.
- [Redux](https://redux.js.org/) for state management.
- [TypeScript](https://www.typescriptlang.org/) for adding type safety to JavaScript.
