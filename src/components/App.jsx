import Header from './Header';
import Main from './Main';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { loadRecipes } from '../redux/reducers/recipes';
import { Switch, Route } from 'react-router-dom';
import AllRecipes from './Categories/AllRecipes';
import Meat from './Categories/Meat';
import Desserts from './Categories/Desserts';
import Beverages from './Categories/Beverages';
import Salads from './Categories/Salads';

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
