import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";

import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";


export default function MoviesPage() {
    const location = useLocation();
    const history = useHistory();
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    
    
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

        fetchMovies
            .fetchSearchMovie(query)
            .then(data => {
                setData(data.results);
            });
    }, [query]);


    const getSearchValue = newSearch => {
        if (query === newSearch) {
            return;
        }
        setQuery(newSearch);
        // setPage(1);
        setData([]);
        history.push({
            ...location,
            seach: `query=${newSearch}`
        });
    };
    

    return (
        <>
            <SearchForm
                getSearchValue={getSearchValue}
            />

            <MoviesList data={data} />
        </>
    )
}






//OLD CODE
// import { useEffect, useState } from "react";

// import SearchForm from '../components/SearchForm/SearchForm';
// import * as fetchMovies from '../services/movies-api';
// import MoviesList from "../components/MoviesList/MoviesList";

// export default function MoviesPage() {
//     const [query, setQuery] = useState('');
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         if (query === '') {
//             return;
//         }

//         fetchMovies.fetchSearchMovie(query)
//             .then(data => {
//                 setData(data.results);
//             });
//     }, [query]);
//     console.log(data);

//     const getSearchValue = query => {
//         setQuery(query);
//         // setPage(1);
//         setData([]);
//     };
    

//     return (
//         <>
//             <SearchForm getSearchValue={getSearchValue}/>

//             <MoviesList data={data} />
//         </>
//     )
// }



//????
// import { useEffect, useState } from "react";
// import { useLocation, useHistory } from "react-router";

// import SearchForm from '../components/SearchForm/SearchForm';
// import * as fetchMovies from '../services/movies-api';
// import MoviesList from "../components/MoviesList/MoviesList";


// export default function MoviesPage() {
//     const location = useLocation();
//     const history = useHistory();
//     const [query, setQuery] = useState('');
//     const [data, setData] = useState([]);
    
    
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

//         fetchMovies
//             .fetchSearchMovie(query)
//             .then(data => {
//                 setData(data.results);
//             });
//     }, [query]);


//     const getSearchValue = newSearch => {
//         if (query === newSearch) {
//             return;
//         }
//         setQuery(newSearch);
//         // setPage(1);
//         setData([]);
//         history.push({
//             ...location,
//             seach: `query=${newSearch}`
//         });
//     };
    

//     return (
//         <>
//             <SearchForm
//                 getSearchValue={getSearchValue}
//             />

//             <MoviesList data={data} />
//         </>
//     )
// }