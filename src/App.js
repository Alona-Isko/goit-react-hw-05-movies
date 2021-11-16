import { Switch, Route } from 'react-router';
import './App.css';

import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';


export default function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

    </Container>
  );
}
