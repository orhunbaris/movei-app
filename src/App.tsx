import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
