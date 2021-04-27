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
      <div>
        <Header />
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route exact path="/admin">
            <Main />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Redirect to="/admin" />
        </Switch>
        <Footer />
      </div>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <div>
          <Header />
          <Route path="/categories">
            <Categories />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Footer />
        </div>
        <Redirect to="/signIn" />
      </Switch>
    );
  }

  return <div className="container-lg mb-5">{routes}</div>;
}

export default App;
