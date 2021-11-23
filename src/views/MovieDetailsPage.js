import { useState, useEffect, lazy, Suspense } from "react";
import {
    Route,
    useParams,
    NavLink,
    useRouteMatch,
    useLocation,
    useHistory
} from "react-router-dom";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import * as fetchMovies from '../services/movies-api';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
    import('../components/Cast/Cast.js' /* webpackChunkName: "cast"*/),
);
const Reviews = lazy(() =>
    import('../components/Reviews/Reviews.js' /* webpackChunkName: "reviews"*/),
);


export default function MovieDetailsPage() {
    const {url, path} = useRouteMatch();
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();
    // console.log('MovieDetailsPage:', location);
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMovies
            .fetchMoreInfo(movieId)
            .then(setMovies);
    }, [movieId]);
 
    const onGoBack = () => {
        history.push(location?.state?.from ?? '/');
    };


    return (
        <>
            <GoBackButton
                onGoBack={onGoBack}
            />
            { movies && (
                    <article className={s.movie__wrap}>

                <div className={s.movie__container}>
                    {movies.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                            alt={movies.title}
                            width="320"
                            className={s.movie__img}
                        />
                    )}

                    <div className={s.movie__content}>
                        <h2 className={s.content__title}>{movies.title}</h2>
                        <p className={s.content__text}>User Score: {movies.vote_average * 10}%</p>
                        
                        <h3 className={s.sec__title}>Overwiew</h3>
                        <p className={s.content__text}>{movies.overview}</p>

                        <h3 className={s.sec__title}>Genres</h3>
                        <ul>
                            {movies.genres && 
                                movies.genres.map(genre => (
                                    <li key={genre.id} className={s.content__genres}>
                                        {genre.name}
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className={s.sec__title}>Additional information</h3>
                    <ul>
                        <li className={s.content__genres}>
                            <NavLink
                                to={{
                                pathname: `${url}/cast`,
                                state: {...location.state},
                            }}
                            >
                                Cast
                            </NavLink>
                        </li>
                                
                        <li className={s.content__genres}>
                            <NavLink
                                to={{
                                    pathname: `${url}/reviews`,
                                    state: {...location.state},
                                }}
                            >
                                Reviews
                            </NavLink>
                        </li>
                    </ul>

                    <Suspense fallback={<h1>Loading...</h1>}>       
                        <Route path={`${path}/cast`}>
                            <Cast />        
                        </Route>
                                
                        <Route path={`${path}/reviews`}>
                            <Reviews />
                        </Route>
                    </Suspense>
                            
                </div>
                </article>
            )}
        </>
    );
};