import axios from "axios";

const API_BASE = "http://localhost:8080/api";

export const searchMovies = async (title) => {
  const res = await axios.get(`${API_BASE}/search`, {
    params: { title },
  });
  return res.data;
};

export const fetchMovieDetails = async (imdbID) => {
  const res = await axios.get(`${API_BASE}/movie/${imdbID}`);
  return res.data;
};
