import Header from './Header';
import Main from './Main';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { loadRecipes } from '../redux/reducers/recipes';
import Categories from './Categories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="container-lg mb-5">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
