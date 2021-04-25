import Header from './Header';
import Main from './Main';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import { Redirect } from 'react-router';
import { loadRecipes } from '../redux/reducers/recipes';
import Categories from './Categories';
import Bookmark from './Bookmark';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const token = useSelector((state) => state.auth.token);
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Redirect exact to="/categories/all-recipes/:id?" />
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
      <Switch>
        <Route path="/SignIn">
          <SignIn />
          {routes}
        </Route>
        <Route path="/categories">
          <Header routes={routes} />
          <Categories />
          <Footer />
        </Route>
        <Route exact path="/">
          <Header routes={routes} />
          <Main />
          <Footer />
        </Route>
        <Route path="/bookmark">
          <Header />
          <Bookmark />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
