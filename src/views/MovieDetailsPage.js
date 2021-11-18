import { useParams } from "react-router";
import { useState, useEffect } from "react";

import * as fetchMovies from '../services/movies-api';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMovies
            .fetchMoreInfo(movieId)
            .then(setMovies);
    }, [movieId]);

    
    return (
    <>
        { movies && (
            <article>
            <button type="button">
                &#x027F5; Go back
            </button>

            <div>
                {movies.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                        alt={movies.title}
                        width="320"
                    />
                )}

                <div>
                    <h2>{movies.title}</h2>
                    <p>User Score: {movies.vote_average * 10}%</p>
                    
                    <h3>Overwiew</h3>
                    <p>{movies.overview}</p>

                    <h3>Genres</h3>
                    <ul>
                        {movies.genres && 
                            movies.genres.map(genre => (
                                <li key={genre.id}>
                                    {genre.name}
                                </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h3>Additional information</h3>
                <ul>
                    <li>Cast</li>
                    <li>Previews</li>
                </ul>
            </div>
        </article>
            )}
    </>
    );
};