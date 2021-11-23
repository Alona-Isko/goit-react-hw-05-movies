import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "one-movie-page"*/),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage.js' /* webpackChunkName: "not-found-page"*/),
);


export default function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<h1><Loader /></h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

    </Container>
  );
}
