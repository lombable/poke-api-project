import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LandingPage from './views/LandingPage'
import Pokegrid from './views/Pokegrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import injectContext from './store/injectContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pokegrid" component={Pokegrid} />
      </Switch>
    </Router>
  );
}

export default injectContext(App);
