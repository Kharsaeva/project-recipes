import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import AllRecipes from './AllRecipes';
import Meat from './Meat';
import Desserts from './Desserts';
import Beverages from './Beverages';
import Salads from './Salads';

function Categories(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/all-recipes/:id?">
        <AllRecipes />
      </Route>
      <Route path="/meat/:id?">
        <Meat />
      </Route>
      <Route path="/desserts/:id?">
        <Desserts />
      </Route>
      <Route path="/beverages/:id?">
        <Beverages />
      </Route>
      <Route path="/salads/:id?">
        <Salads />
      </Route>
    </Switch>
  );
}

export default Categories;
