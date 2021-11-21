// import { useEffect, useState } from "react";
// import { useLocation, useHistory } from "react-router";

// import SearchForm from '../components/SearchForm/SearchForm';
// import * as fetchMovies from '../services/movies-api';
// import MoviesList from "../components/MoviesList/MoviesList";

// export default function MoviesPage() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [data, setData] = useState([]);
//     const location = useLocation();
//     // const { search } = location;
//     const history = useHistory();
    

    
//     useEffect(() => {
//         if (searchQuery === '') {
//             return;
//         }

//         fetchMovies.fetchSearchMovie(searchQuery)
//             .then(data => {
//                 setData(data.results);
//             });
//     }, [searchQuery]);


//     // const sortQuery = new URLSearchParams(location.search).get('query');

//     const getSearchValue = query => {
//         setSearchQuery(query);
//         // setPage(1);
//         setData([]);
//         history.push({
//             ...location,
//             seach: `query=${query}`
//         });
//     };
    

//     return (
//         <>
//             <SearchForm
//                 // query={sortQuery}
//                 getSearchValue={getSearchValue}
//                 // onSubmit={}
//             />

//             <MoviesList data={data} />
//         </>
//     )
// }


//works
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";

import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovies from '../services/movies-api';
import MoviesList from "../components/MoviesList/MoviesList";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const location = useLocation();
    const history = useHistory();

    
    useEffect(() => {
        if (query === '') {
            return;
        }

        fetchMovies.fetchSearchMovie(query)
            .then(data => {
                setData(data.results);
            });
    }, [query]);


    const sortQuery = new URLSearchParams(location.search).get('query');

    const getSearchValue = query => {
        setQuery(query);
        // setPage(1);
        setData([]);
        history.push({
            ...location,
            seach: `query=${query}`
        });
    };
    

    return (
        <>
            <SearchForm
                query={sortQuery}
                getSearchValue={getSearchValue}
                // onSubmit={}
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
