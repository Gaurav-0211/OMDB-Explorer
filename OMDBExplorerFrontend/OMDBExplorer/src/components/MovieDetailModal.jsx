export default function MovieDetailModal({
  movie,
  onClose,
  addFav,
  favorites,
}) {
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-slate-900 rounded-2xl max-w-4xl w-full relative border border-purple-500/20 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-slate-800/90 hover:bg-slate-700 rounded-full transition-colors"
        >
          <svg
            className="w-5 h-5 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Poster Section */}
          <div className="flex-shrink-0">
            <div className="relative w-full md:w-64 rounded-xl overflow-hidden shadow-lg border border-purple-500/30">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x445?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            {/* Title and Year */}
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-white mb-2">
                {movie.Title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="px-3 py-1 bg-purple-600/20 rounded-full border border-purple-500/30">
                  {movie.Year}
                </span>
                <span className="px-3 py-1 bg-purple-600/20 rounded-full border border-purple-500/30">
                  {movie.Rated}
                </span>
                <span>{movie.Runtime}</span>
              </div>
            </div>

            {/* Genre */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {movie.Genre?.split(", ").map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800 text-purple-400 rounded-lg text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <span className="text-2xl font-bold text-white">
                    {movie.imdbRating}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">/10</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <div>{movie.imdbVotes} votes</div>
              </div>
            </div>

            {/* Plot */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Synopsis
              </h3>
              <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <div className="flex">
                <span className="text-gray-500 font-medium w-24">Director</span>
                <span className="text-gray-300">{movie.Director}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 font-medium w-24">Writers</span>
                <span className="text-gray-300">{movie.Writer}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 font-medium w-24">Cast</span>
                <span className="text-gray-300">{movie.Actors}</span>
              </div>
              {movie.Language && (
                <div className="flex">
                  <span className="text-gray-500 font-medium w-24">
                    Language
                  </span>
                  <span className="text-gray-300">{movie.Language}</span>
                </div>
              )}
              {movie.Country && (
                <div className="flex">
                  <span className="text-gray-500 font-medium w-24">
                    Country
                  </span>
                  <span className="text-gray-300">{movie.Country}</span>
                </div>
              )}
            </div>

            {/* Action Button */}
            <button
              className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                isFavorite
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
              }`}
              onClick={() => addFav(movie)}
            >
              <svg
                className="w-5 h-5"
                fill={isFavorite ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
