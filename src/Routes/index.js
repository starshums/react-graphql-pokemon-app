import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PokemonDetail } from '../components/PokemonDetail';
import { PokemonsContainer } from '../containers/PokemonsContainer';

export const Routes = () => {
    return <Router>
    <Switch>
      <Route exact={true} path="/pokemon" component={PokemonsContainer} />
      <Route exact={true} path="/pokemon/:name" component={PokemonDetail} />
    </Switch>
  </Router>;
}