import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as fetchMovies from '../../services/movies-api';


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
            <ul>
                {reviews &&
                    reviews.map(rev => (
                        <li key={rev.id}>
                            <p>{rev.author}</p>
                            <p>{rev.content}</p>
                        </li>
                    )
                )}
            </ul>

            {reviews.length === 0 && (
                <p>There are no reviews</p>
            )}
        </>
    );
};

