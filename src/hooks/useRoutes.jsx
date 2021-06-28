import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../components/Main';
import Bookmark from '../components/Bookmark';
import Categories from '../components/Categories';
import AdminPage from '../components/AdminPage';
import { useAuth } from './useAuth';
import Recipes from '../components/Recipes';

const routes = [
  {
    path: '/recipes/:id?',
    component: Recipes,
  },
  {
    path: '/admin',
    component: AdminPage,
    requiredAuth: true,
  },
  {
    path: '/categories/:id?',
    component: Categories,
  },
  {
    path: '/bookmark',
    component: Bookmark,
  },
  {
    path: '/',
    component: Main,
    exact: true,
  },
];

function useRoute() {
  const isAuth = useAuth();

  return (
    <Switch>
      {routes.map((route) => {
        if (route.requiredAuth && !isAuth) {
          return null;
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
}

export default useRoute;
