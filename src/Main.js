import Opus from './Opus';
import Hobby from './Hobby';
import About from './About';
import Do from './Do';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Main(){
    return(
      <Router>
        <Switch>
          <Route path="/about">
            {About}
          </Route> 
          <Route path="/do">
            <Do />
          </Route>
          <Route path="/hobby">
            <Hobby />
          </Route>
          <Route path="/opus">
            <Opus />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    )
  }

export default Main;