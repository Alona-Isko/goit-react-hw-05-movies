import { useState, useEffect } from "react";
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from '../components/Loader/Loader';
import s from './HomePage.module.css';

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovies
      .fetchTrends()
      .then(data => {
        setData(data.results);
      })
      .finally(setLoading(false));
  }, []);
  


  return (
    <>
      {loading && <Loader />}
      <div>
        <h1 className={s.home__title}>Trending movies:</h1>
        <MoviesList data={data} />
        
      </div>
    </>
  );
}
