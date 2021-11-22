import { useState, useEffect } from "react";
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";
import s from './HomePage.module.css';

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
      <h1 className={s.home__title}>Trending movies:</h1>
      <MoviesList data={data} />
      
    </div>
  );
}
