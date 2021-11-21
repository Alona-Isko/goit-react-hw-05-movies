import { useState } from "react";

// import { useHistory, useLocation } from "react-router";

export default function MoviesPage({ getSearchValue }) {
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        // if (query.trim() === '') {
            
        // }

        getSearchValue(query);
        setQuery('');
    };


    return (
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleInputChange}
                />
                <button type="submit" >
                    Search
                </button>
            </form>
    )
}


//Lena

// export default function MoviesPage({ query, getSearchValue, onSubmit }) {
// const history = useHistory();
//     const location = useLocation();
    
//     const handleInputChange = e => {
//         getSearchValue(e.currentTarget.value.toLowerCase());
//     };
    
//     const handleSubmit = e => {
//         e.preventDefault();

//         // if (query.trim() === '') {
            
//         // }

//         history.push({ ...location, search: `query=${query}` });
//         onSubmit(query);
//     };


//     return (
//             <form
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     type="text"
//                     value={query}
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search movies"
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit" >
//                     Search
//                 </button>
//             </form>
//     )
// }