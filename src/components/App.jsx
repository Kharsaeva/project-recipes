import Header from "./Header";
import Main from "./Main";
import React, { useEffect } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { loadRecipes } from "../redux/reducers/recipes";
import Recipes from './Recipes'
import RecipesItem from './RecipesItem'
import {Switch, Route} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="container-lg">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/allrecipes">
          <Recipes />
        </Route>
        <Route path="/meat">
          <RecipesItem />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
