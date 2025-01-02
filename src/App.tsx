import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import store from "./redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
