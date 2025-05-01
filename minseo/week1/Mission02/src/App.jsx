import './App.css';
import MovieImage from './components/MovieImage';

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  return (
    <div className="container">
      <MovieImage baseUrl={BASE_URL} />
    </div>
  );
}

export default App;
