import MovieCard from "./MovieCard";

export default function ResultsGrid({ items, openDetails }) {
  if (!items || items.length === 0)
    return <p className="text-gray-400">No results found.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {items.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} openDetails={openDetails} />
      ))}
    </div>
  );
}
