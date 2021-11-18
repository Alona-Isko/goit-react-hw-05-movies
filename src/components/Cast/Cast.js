import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as fetchMovies from '../../services/movies-api';


export default function Cast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchMovies
            .fetchCast(movieId)
            .then(data => {
                setActors(data.cast);
            });
    }, [movieId]);

    return (
        <>
            <ul>
                {actors &&
                    actors.map(actor => (
                        <li key={actor.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt={actor.name}
                                width="150"
                            />
                            <p>{actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </li>
                    )
                )}
            </ul>

            {actors.length === 0 && (
                <p>There is no information about cast</p>
            )}
        </>
    );
};