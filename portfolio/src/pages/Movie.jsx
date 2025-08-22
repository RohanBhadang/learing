import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Dummy API — You can replace this with a real one
     const dummyData = [
      { id: 1, name: "ANNA", image: "https://media.themoviedb.org/t/p/w500/e5UvZylFwvwwFS2YubKBvObqTM6.jpg"},
      { id: 2, name: "PATHAN", image: "https://wallpapers.com/images/hd/movie-pictures-4husfszxhumfc642.jpg" },
      { id: 3, name: "IT", image: "https://th.bing.com/th/id/OIP.6yfpAPM6r-bjcBpMQYXRggHaKe?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
    ];
    setMovies(dummyData);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="border p-4 rounded shadow hover:shadow-lg">
          <img src={movie.image} alt={movie.name} className="mb-2 w-full" />
          <h2 className="text-lg font-semibold">{movie.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Movie;
