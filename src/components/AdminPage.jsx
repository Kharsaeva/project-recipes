import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRecipe,
  changeRecipeCalories,
  changeRecipeCooking,
  changeRecipeIngredients,
  changeRecipeTime,
  changeRecipeTitle,
  changeRecipeUrl,
} from '../redux/reducers/adminPanel';
import { useHistory } from 'react-router-dom';

function AdminPage() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [error, setError] = useState(null);

  const loading = useSelector((state) => state.adminPanel.loading);
  const recipe = useSelector((state) => state.adminPanel.recipe);

  const handleRecipeTitle = (e) => {
    dispatch(changeRecipeTitle(e.target.value));
  };

  const handleRecipeTime = (e) => {
    dispatch(changeRecipeTime(e.target.value));
  };

  const handleRecipeIngredients = (e) => {
    dispatch(changeRecipeIngredients(e.target.value));
  };

  const handleRecipeCooking = (e) => {
    dispatch(changeRecipeCooking(e.target.value));
  };

  const handleRecipeUrl = (e) => {
    dispatch(changeRecipeUrl(e.target.value));
  };

  const handleRecipeCalories = (e) => {
    dispatch(changeRecipeCalories(e.target.value));
  };

  const handleAddRecipe = () => {
    if (
      recipe.title.trim() &&
      recipe.ingredients.trim() &&
      recipe.url.trim() &&
      recipe.cooking.trim() &&
      recipe.calories.trim() &&
      recipe.time.trim()
    ) {
      dispatch(addRecipe());
      history.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <div className="container-lg m-auto list-group-item">
      <h1 className="text-sm-center mt-3 ">Добавление нового рецепта</h1>
      <Form.Group className="mb-3">
        <Form.Control
          size="lg"
          placeholder="Название рецепта"
          value={recipe.title}
          onChange={handleRecipeTitle}
        />
        <br />
        <Form.Control
          size="lg"
          placeholder="Время приготовления"
          value={recipe.time}
          onChange={handleRecipeTime}
        />
        <br />
        <Form.Control
          as="textarea"
          size="lg"
          placeholder="Ингредиенты"
          value={recipe.ingredients}
          onChange={handleRecipeIngredients}
        />
        <br />
        <Form.Control
          as="textarea"
          size="lg"
          placeholder="Способ приготовления"
          value={recipe.cooking}
          onChange={handleRecipeCooking}
        />
        <br />
        <Form.Control
          size="lg"
          placeholder="Вставьте сюда url-адрес картинки"
          value={recipe.url}
          onChange={handleRecipeUrl}
        />
        <br />
        <Form.Control
          size="lg"
          placeholder="Калории"
          value={recipe.calories}
          onChange={handleRecipeCalories}
        />
        <br />
      </Form.Group>
      {error && <div className="error-block">Поля пустые</div>}
      <Button
        className="btn-block2 mb-3"
        variant="primary"
        onClick={handleAddRecipe}
        disabled={loading}
      >
        Добавить рецепт
      </Button>
    </div>
  );
}

export default AdminPage;
