import Header from './Header';
import Main from './Main';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { loadRecipes } from '../redux/reducers/recipes';
import Categories from './Categories';
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="container-lg mb-5">
      <Header />
      <Categories />
      <Route exact path="/">
        <Main />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
