import { useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovies from '../services/movies-api';
// import MoviesList from "../components/MoviesList/MoviesList";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const { url } = useRouteMatch();
    const location = useLocation();
    // console.log('MoviesPage', location);

    useEffect(() => {
        if (query === '') {
            return;
        }

        fetchMovies.fetchSearchMovie(query)
            .then(data => {
                setData(data.results);
            });
    }, [query]);

    const getSearchValue = query => {
        setQuery(query);
        // setPage(1);
        setData([]);
    };
    

    return (
        <>
            <SearchForm getSearchValue={getSearchValue}/>

            {/* <MoviesList data={data} /> */}
            <ul>
            {data && data.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={{
                            pathname: `${url}/${movie.id}`,
                            state: {from: location},
                        }}>{movie.title}
                        </Link>
                    </li>
            )})
            }
        </ul>
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
