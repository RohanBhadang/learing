import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Same dummy data
       const dummyData = [
      { id: 1, name: "ANNA", image: "https://media.themoviedb.org/t/p/w500/e5UvZylFwvwwFS2YubKBvObqTM6.jpg",
        description: "Annabelle is a 2014 horror film that explores the terrifying experiences of a couple, John and Mia Gordon, after receiving a vintage doll named Annabelle. The film, set in the 1970s, delves into supernatural occurrences and the couple's struggle against an evil force linked to the doll, particularly after their home is invaded by satanic cultists"
        
      },
      { id: 2, name: "PATHAN ", image: "https://wallpapers.com/images/hd/movie-pictures-4husfszxhumfc642.jpg",
        description: "Pathan is a 2023 Indian action thriller film that follows the story of a former RAW agent, Pathan, who is on a mission to protect his country from a major threat.",
      },
      { id: 3, name: "IT", image: "https://th.bing.com/th/id/OIP.6yfpAPM6r-bjcBpMQYXRggHaKe?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "IT is a 2017 supernatural horror film based on Stephen King's novel. It follows a group of children who are terrorized by a shape-shifting entity that takes the form of Pennywise the Dancing Clown."
      }
    ];
    const selected = dummyData.find((m) => m.id === parseInt(id));
    setMovie(selected);
  }, [id]);

  if (!movie) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={movie.image} alt={movie.name} className="w-full max-w-md mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-center">{movie.name}</h1>
      <h1 className="text-2xl font-bold text-center">{movie.description}</h1>
    </div>
  );
};

export default MovieDetail;
