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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="container-lg mb-5">
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/allrecipes/:id?">
          <Header />
          <Allrecipes />
          <Footer />
        </Route>
        <Route path="/meat/:id?">
          <Header />
          <Meat />
          <Footer />
        </Route>
        <Route path="/desserts/:id?">
          <Header />
          <Desserts />
          <Footer />
        </Route>
        <Route path="/beverages/:id?">
          <Header />
          <Beverages />
          <Footer />
        </Route>
        <Route path="/salads/:id?">
          <Header />
          <Salads />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
