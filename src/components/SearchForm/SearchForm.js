import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
    const location = useLocation();
    const history = useHistory();
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
        history.push({ ...location, search: `query=${query}` });
        onSubmit(query);
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
                    placeholder="Search movie"
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
