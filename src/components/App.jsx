import Header from './Header';
import Footer from './Footer';
import useRoute from '../hooks/useRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
function App() {
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
