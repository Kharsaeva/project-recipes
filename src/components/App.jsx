import Header from './Header';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { loadRecipes } from '../redux/reducers/recipes';
import useRoute from '../hooks/useRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const routes = useRoute();

  return (
    <div className="container-lg mb-5">
      <Router>
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <div>
            <Header />
            {routes}
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// const token = useSelector((state) => state.auth.token);
// let routes;
// if (token) {
//   routes = (
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/categories">
//           <Categories />
//         </Route>
//         <Route exact path="/admin">
//           <Main />
//         </Route>
//         <Route path="/bookmark">
//           <Bookmark />
//         </Route>
//         <Redirect to="/admin" />
//       </Switch>
//       <Footer />
//     </div>
//   );
// } else {
//   routes = (
//     <Switch>
//       <Route path="/signIn">
//         <SignIn />
//       </Route>
//       <div>
//         <Header />
//         <Route path="/categories">
//           <Categories   />
//         </Route>
//         <Route exact path="/">
//           <Main />
//         </Route>
//         <Route path="/bookmark">
//           <Bookmark />
//         </Route>
//         <Footer />
//       </div>
//       <Redirect to="/signIn" />
//     </Switch>
//   );
