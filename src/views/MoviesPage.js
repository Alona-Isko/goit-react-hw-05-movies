import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Loader from "../components/Loader/Loader";
import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";


export default function MoviesPage() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        if (query) {
            setLoading(true);
            fetchMovies
                .fetchSearchMovie(query)
                .then(({ results }) => {
                    if (results.length === 0) {
                        setError(`No results were found for ${query}!`);
                        return;
                    }
                    setSearchQuery(query);
                    setData(results);
                })
                .catch(error => setError(error))
            .finally(setLoading(false))
        }
    }, [location.search]);
    
    
    const getSearchValue = newSearch => {
        if (searchQuery === newSearch) {
            return;
        }
    
        if (!searchQuery) return;

        setSearchQuery(newSearch);
        setData([]);
        setError(null);
    };
            

    return (
        <>
            {loading && <Loader />}
            
            <SearchForm
                onSubmit={getSearchValue}
            />

            <MoviesList data={data} />

            <ToastContainer
                autoClose={2000}
            />

            {error && error}
        </>
    )
}




//  old code
// import { useEffect, useState } from "react";
// import { useLocation, useHistory } from "react-router";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// import Loader from "../components/Loader/Loader";
// import SearchForm from '../components/SearchForm/SearchForm';
// import * as fetchMovies from '../services/movies-api';
// import MoviesList from "../components/MoviesList/MoviesList";


// export default function MoviesPage() {
//     const location = useLocation();
//     const history = useHistory();
//     const [query, setQuery] = useState('');
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
    
//     useEffect(() => {
//         if (location.search === '') {
//             return;
//         }
//         const newSearch = new URLSearchParams(location.search).get('query');
//         setQuery(newSearch);
//     }, [location.search]);
    

//     useEffect(() => {
//         if (!query) {
//             return;
//         }
//         setLoading(true);
//         fetchMovies
//             .fetchSearchMovie(query)
//             .then(data => {
//                 setData(data.results);
//             })
//             .finally(setLoading(false));
//     }, [query]);


//     const getSearchValue = newSearch => {
//         if (query === newSearch) {
//             return;
//         }
//         setQuery(newSearch);
//         setData([]);
//         history.push({
//             ...location,
//             seach: `query=${newSearch}`
//         });
//     };
    

//     return (
//         <>
//             {loading && <Loader />}
            
//             <SearchForm
//                 onSubmit={getSearchValue}
//             />

//             <MoviesList data={data} />

//             <ToastContainer
//                 autoClose={2000}
//             />
//         </>
//     )
// }
