import { useState, useEffect } from "react";
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovies
      .fetchTrends()
      .then(data => {
        setData(data.results);
      })
  }, []);


  return (
    <div>
      <h1>Trending movies:</h1>
      <MoviesList data={data} />
    </div>
  );
}