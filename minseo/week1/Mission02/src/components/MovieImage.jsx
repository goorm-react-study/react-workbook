import {MOVIES} from "../mocks/movies"
import "../styles/MovieImage.css"
function MovieImage({ baseUrl }) {
  console.log('MOVIES:', MOVIES);

  const movies = MOVIES.results;

  return (
    <>
      {movies.map((movie) => {
        console.log('poster path:', movie.poster_path); 

        return (
          <div className="movieCard">
          <img
            key={movie.id}
            className="movieImage"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="overlay" />
          </div>
        );
      })}
    </>
  );
}

export default MovieImage;