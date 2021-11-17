import { useParams } from "react-router";
import { useState, useEffect } from "react";

import * as fetchMovies from '../services/movies-api';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    console.log(movies);
    useEffect(() => {
        fetchMovies
            .fetchMoreInfo(movieId)
            .then(setMovies);
    }, [movieId]);

    
    return (
        <>
            <button type="button">
                Go back
            </button>

        { movies && (
            <>
                <div>
                    <img src={movies.poster_path} alt={movies.title} width="320"/>
                    <div>
                        <h2>{movies.title}</h2>
                            <p>User Score: {movies.vote_average}</p>

                        <h3>Overwiew</h3>
                            <p>{movies.overview}</p>

                        <h3>Genres</h3>
                        <p>something</p>
                    </div>
                </div>
            </>
        )}

            {/* <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        Cast
                    </li>
                    <li>
                        Previews
                    </li>
                </ul>
            </div> */}
        </>
    )
};