import { Switch, Route } from 'react-router';
import './App.css';

import Container from './components/Container/Container';
import Searchbar from './components/Searcbar/Searcbar';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';


export default function App() {
  return (
    <Container>
      <Searchbar />

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
