import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as fetchMovies from '../../services/movies-api';
import s from './Reviews.module.css';


export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovies
            .fetchReviews(movieId)
            .then(data => {
                setReviews(data.results);
            });
    }, [movieId]);


    return (
        <>
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

