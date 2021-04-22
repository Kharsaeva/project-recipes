import Header from "./Header";
import Main from "./Main";
import React, { useEffect } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "../redux/reducers/recipes";
import { Switch, Route } from "react-router-dom";
import Allrecipes from "./Allrecipes";
import Meat from "./Meat";
import Desserts from "./Desserts";
import Beverages from "./Beverages";
import Salads from "./Salads";
import SignIn from "./SignIn";
import { Redirect } from 'react-router'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const token = useSelector((state) => state.recipes.token);
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Redirect exact to="/allrecipes" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Redirect to="/SignIn" />
      </Switch>
    );
  }

  return (
    <div className="container-lg mb-5">
      {routes}
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Header routes={routes}/>
          <Main />
          <Footer />
        </Route>
        <Route path="/allrecipes/:id?">
          <Header routes={routes}/>
          <Allrecipes />
          <Footer />
        </Route>
        <Route path="/meat/:id?">
          <Header routes={routes}/>
          <Meat />
          <Footer />
        </Route>
        <Route path="/desserts/:id?">
          <Header routes={routes}/>
          <Desserts />
          <Footer />
        </Route>
        <Route path="/beverages/:id?">
          <Header routes={routes}/>
          <Beverages />
          <Footer />
        </Route>
        <Route path="/salads/:id?">
          <Header routes={routes}/>
          <Salads />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
