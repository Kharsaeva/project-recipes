import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllRecipes from './AllRecipes';
import Meat from './Meat';
import Desserts from './Desserts';
import Beverages from './Beverages';
import Salads from './Salads';

function Categories(props) {
  return (
    <div className="categories">
      <Switch>
        <Route path="/categories/all-recipes/:id?">
          <AllRecipes />
        </Route>
        <Route path="/categories/meat/:id?">
          <Meat />
        </Route>
        <Route path="/categories/desserts/:id?">
          <Desserts />
        </Route>
        <Route path="/categories/beverages/:id?">
          <Beverages />
        </Route>
        <Route path="/categories/salads/:id?">
          <Salads />
        </Route>
      </Switch>
    </div>
  );
}

export default Categories;
