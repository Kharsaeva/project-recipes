import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import Recipes from './Recipes'

function Allrecipes (recipe) {
  const recipes = useSelector((state) => state.recipes.items);

  return (
    <div>
      <div>
        <Route path="/allrecipes/:id?/:title?">
          <Recipes />
        </Route>
      </div>
      {recipes.map(recipe => {
        return(

          <div  style={{ width: "58%" }}
                className="Recipes justify-content-center m-auto">
            <div className="recipes-block">
              <Route exact path="/allrecipes/:id?">
              <Link to={`/allrecipes/${recipe.id}/${recipe.title}`}>
                <div className="d-inline-flex">
                  <div className="img mb-3">
                    <img width={286} height={180} src={recipe.url} alt="img" />
                  </div>
                  <div className="d-block p-3 align-self-center">
                    <h4>{recipe.title}</h4>
                    <div className="d-inline d-flex">
                      <div>{recipe.calories}</div>
                      <div
                        style={{ borderRight: "1px solid darkgrey" }}
                        className="ml-4 mr-4"
                      >
                        {" "}
                      </div>
                      <div>{recipe.time}</div>
                    </div>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid darkgrey" }} className="pb-3">
                  {" "}
                </div>
              </Link>
              </Route>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default Allrecipes