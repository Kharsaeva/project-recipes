import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFilterText } from "../redux/reducers/recipes";
import RecipesItem from "./RecipesItem";

function Search(props) {
  const recipes = useSelector((state) => state.recipes.items);
  const filter = useSelector((state) => state.recipes.filter);

  const dispatch = useDispatch();

  const filteredRecipes = recipes.filter(
    (item) => item.title.indexOf(filter) > -1
  );

  const handleChangeFilter = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  return (
    <div style={{ width: "60%" }} className="m-auto pt-1">
      <Form.Group className="d-flex">
        <Form.Control
          placeholder="Найти нужный рецепт..."
          value={filter}
          onChange={handleChangeFilter}
        />
        {/*<Button className="ml-1 pl-4 pr-4" variant="dark">*/}
        {/*  Найти*/}
        {/*</Button>*/}
      </Form.Group>
      {filteredRecipes.map((item) => {
        return <RecipesItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Search;
