import { useEffect, useState } from "react";
import { fetchMovieDetails, searchMovies } from "./api";
import FavoritesBar from "./components/FavoritesBar";
import MovieDetailModal from "./components/MovieDetailModal";
import ResultsGrid from "./components/ResultsGrid";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // For Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // To Store favorites
  const updateFavorites = (movie) => {
    let updated;
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      updated = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updated = [...favorites, movie];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // For Search handler
  const handleSearch = async (query) => {
    if (!query.trim()) return;

    const data = await searchMovies(query);
    setResults(data.Search || []);
  };

  // To Fetch movie details
  const openDetails = async (imdbID) => {
    const movie = await fetchMovieDetails(imdbID);
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg shadow-purple-500/50">
                <span className="text-3xl">🎬</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  OMDB Explorer
                </h1>
                <p className="text-sm text-purple-300">
                  Discover Your Next Favorite Film
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <FavoritesBar favorites={favorites} openDetails={openDetails} />

        <ResultsGrid items={results} openDetails={openDetails} />

        {selectedMovie && (
          <MovieDetailModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
            addFav={updateFavorites}
            favorites={favorites}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-purple-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                About OMDB Movie Explorer
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Discover your next favorite movie with Cinema Explorer. Powered
                by OMDB API, delivering accurate movie details and an immersive
                search experience.
              </p>
            </div>

            {/* Quick Links to redirect the same page */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Quick Links
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Search Movies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    My Favorites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Connect With Us
              </h3>

              <div className="space-y-3 text-gray-300 text-sm">
                <p className="flex items-center gap-3">
                  <span className="text-lg">📱</span>
                  <a
                    href="tel:+919060943814"
                    className="hover:text-purple-400 transition"
                  >
                    +91 9060943814
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <a
                    href="mailto:gauravkr0211@gmail.com"
                    className="hover:text-purple-400 transition"
                  >
                    gauravkr0211@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <span className="text-lg">🖇️</span>
                  <a href="#" className="hover:text-purple-400 transition">
                    www.linkedin.com/in/gauravkumar
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-purple-500/20 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Movie Explorer. All Rights Reserved.
            </p>
            <p className="text-purple-400 text-sm mt-1">
              Designed by Gaurav Kumar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
