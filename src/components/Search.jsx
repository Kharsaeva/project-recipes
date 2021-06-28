import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../redux/reducers/recipes';

function Search() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.recipes.filter);

  const handleChangeFilter = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  return (
    <div className="m-auto pt-3 w-75 ">
      <Form.Group className="d-flex">
        <Form.Control
          placeholder="Найти нужный рецепт..."
          value={filter}
          onChange={handleChangeFilter}
        />
      </Form.Group>
    </div>
  );
}

export default Search;
