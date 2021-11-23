import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Loader from "../components/Loader/Loader";
import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";


export default function MoviesPage() {
    const location = useLocation();
    const history = useHistory();
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (location.search === '') {
            return;
        }
        const newSearch = new URLSearchParams(location.search).get('query');
        setQuery(newSearch);
    }, [location.search]);
    

    useEffect(() => {
        if (!query) {
            return;
        }
        setLoading(true);
        fetchMovies
            .fetchSearchMovie(query)
            .then(data => {
                setData(data.results);
            })
            .finally(setLoading(false));
    }, [query]);


    const getSearchValue = newSearch => {
        if (query === newSearch) {
            return;
        }
        setQuery(newSearch);
        setData([]);
        history.push({
            ...location,
            seach: `query=${newSearch}`
        });
    };
    

    return (
        <>
            {loading && <Loader />}
            
            <SearchForm
                getSearchValue={getSearchValue}
            />

            <MoviesList data={data} />

            <ToastContainer
                autoClose={2000}
            />
        </>
    )
}

