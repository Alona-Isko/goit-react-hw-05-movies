import { useState } from "react";

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