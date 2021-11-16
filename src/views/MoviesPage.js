import { useState } from "react";

export default function MoviesPage({getSearchValue}) {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // if (query.trim() === '') {
            
        // }
        
        getSearchValue(query);
        setQuery('');
    };

    const handleInputChange = e => {
        setQuery(e.target.value.toLowerCase());
        console.log(e.target.value);
    };


    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
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