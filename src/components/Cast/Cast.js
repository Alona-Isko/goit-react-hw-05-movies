import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as fetchMovies from '../../services/movies-api';
import noImage from './noImage.png';
import s from './Cast.module.css';


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
            <ul className={s.cast__wrap}>
                {actors &&
                    actors.map(actor => (
                        <li key={actor.id} className={s.cast__item}>
                            <img
                                src={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                    : noImage}
                                alt={actor.name}
                                width="150"
                            />
                            <p className={s.cast__actor}>{actor.name}</p>
                            <p className={s.character__text}><span className={s.character__title}>Character</span>: {actor.character}</p>
                        </li>
                    )
                )}
            </ul>

            {actors.length === 0 && (
                <p className={s.error__text}>There is no information</p>
            )}
        </>
    );
};