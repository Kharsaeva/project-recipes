import Header from './Header';
import Main from './Main';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { loadRecipes } from '../redux/reducers/recipes';
import { Switch, Route } from 'react-router-dom';
import AllRecipes from './AllRecipes';
import Meat from './Meat';
import Desserts from './Desserts';
import Beverages from './Beverages';
import Salads from './Salads';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="container-lg mb-5">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
