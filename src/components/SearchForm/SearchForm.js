import { useState } from "react";
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';

export default function SearchForm({ getSearchValue }) {
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') {
            toast('Your query is empty');
            return;
        }

        getSearchValue(query);
        setQuery('');
    };


    return (
            <form
            onSubmit={handleSubmit}
            className={s.form}
            >
                <input
                    type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleInputChange}
                    className={s.input}
                />
            <button
                type="submit"
                className={s.form__btn}
            >
                    Search
                </button>
            </form>
    )
}
