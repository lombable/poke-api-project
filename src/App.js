import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./views/LandingPage";
import Pokegrid from "./views/Pokegrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import injectContext from "./store/injectContext";
import DetailedPokemon from "./views/DetailedPokemon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pokegrid" component={Pokegrid} />
        <Route exact path="/detailedpoke/:name" component={DetailedPokemon} />
      </Switch>
    </Router>
  );
}

export default injectContext(App);