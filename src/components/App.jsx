import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Bookmark from './Bookmark';
import Categories from './Categories/Index';
import Recipes from './Recipes/Recipes';
import React from 'react';

function App() {
  return (
    <div className="container-lg mb-5">
      <div>
        <Header />
        <Switch>
          <Route path="/categories/recipes/:id?/:title?">
            <Recipes />
          </Route>
          <Route path="/categories/:id?">
            <Categories />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
