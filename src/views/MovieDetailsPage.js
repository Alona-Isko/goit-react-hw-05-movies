import { Route, useParams } from "react-router";
import { useState, useEffect } from "react";
import { NavLink, useRouteMatch, useLocation, useHistory } from "react-router-dom";

import * as fetchMovies from '../services/movies-api';
import Cast from "../components/Cast/Cast";
import Reviews from '../components/Reviews/Reviews';

export default function MovieDetailsPage() {
    const {url, path} = useRouteMatch();
    const { movieId } = useParams();
    const location = useLocation();
    // console.log('MovieDetailsPage:', location);
    const history = useHistory();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMovies
            .fetchMoreInfo(movieId)
            .then(setMovies);
    }, [movieId]);
 
    const onGoBack = () => {
        history.push(location?.state?.from ?? '/movies');
    };


    return (
    <>
        { movies && (
            <article>
                <button
                    type="button"
                    onClick={onGoBack}
                >
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
                    <li >
                        <NavLink
                            to={`${url}/cast`}
                        >
                                    {/* <NavLink
                            to={{
                            pathname: `${url}/cast,
                            state: {from: }
                        }}
                        > */}
                            Cast
                        </NavLink>
                    </li>
                            
                    <li>
                        <NavLink
                            to={`${url}/reviews`}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
                        
                <Route path={`${path}/cast`}>
                    <Cast />        
                </Route>
                        
                <Route path={`${path}/reviews`}>
                    <Reviews />
                </Route>
                        
            </div>
            </article>
        )}
    </>
    );
};