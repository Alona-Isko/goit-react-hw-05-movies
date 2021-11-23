import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import * as fetchMovies from '../../services/movies-api';
import s from './Reviews.module.css';


export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchMovies
            .fetchReviews(movieId)
            .then(data => {
                setReviews(data.results);
            })
            .finally(setLoading(false));
    }, [movieId]);


    return (
        <>
            {loading && <Loader />}

            <ul className={s.reviews__wrap}>
                {reviews &&
                    reviews.map(rev => (
                        <li key={rev.id}>
                            <p className={s.author__name}>{rev.author}</p>
                            <p>{rev.content}</p>
                        </li>
                    )
                )}
            </ul>

            {reviews.length === 0 && (
                <p className={s.reviews__error}>There are no reviews</p>
            )}
        </>
    );
};

