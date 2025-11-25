export default function MovieCard({ movie, openDetails }) {
  return (
    <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
      {/* Poster Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x445?text=No+Image"
          }
          alt={movie.Title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

        {/* Type Badge */}
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 bg-purple-600/90 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wide">
            {movie.Type || "Movie"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <h3 className="font-bold text-sm line-clamp-2 mb-1 group-hover:text-purple-400 transition-colors">
          {movie.Title}
        </h3>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-purple-400 font-semibold">{movie.Year}</span>
          <div className="flex items-center gap-1 text-gray-400">
            <svg
              className="w-3 h-3 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs">IMDb</span>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => openDetails(movie.imdbID)}
          className="px-5 py-2 ml-[4rem] mb-2 bg-gradient-to-r from-purple-600 to-pink-600 
               hover:from-purple-500 hover:to-pink-500 
               rounded-lg text-sm font-semibold transition-all duration-300 
               transform hover:scale-105 active:scale-95 shadow-lg 
               shadow-purple-500/30 flex items-center justify-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View Details
        </button>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}
