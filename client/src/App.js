import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateCharacter from './components/CreateCharacter';
import Details from './components/Details';
import Home from './components/Home';

/* Aca en App vas a tener que, utilizando el Router, crear las distintas rutas que seran utilizadas
para renderizar los componentes en sus respectivos paths */

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/create">
        <CreateCharacter />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Router>
  );
}
