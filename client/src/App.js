import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
       <Route path="/movies">
         <Movies />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>
    </Router>
  );
}
export default App;
