import { useEffect, useState } from "react";

import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (query === '') {
            return;
        }

        fetchMovies.fetchSearchMovie(query)
            .then(({results}) => {
                setData(results);
            })
    }, [query]);

    const getSearchValue = query => {
        setQuery(query);
        // setPage(1);
        setData([]);
    };
    

    return (
        <>
            <SearchForm getSearchValue={getSearchValue}/>

            <MoviesList data={data} />
        </>
    )
}