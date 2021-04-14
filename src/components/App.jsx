import Header from "./Header";
import Main from "./Main";
import React, { useEffect } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { loadRecipes } from "../redux/reducers/recipes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
