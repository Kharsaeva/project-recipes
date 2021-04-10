import React, { useEffect } from "react";
import Main from "./Main";
import { useDispatch } from "react-redux";
import { loadRecipes } from "../redux/reducers/recipes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
