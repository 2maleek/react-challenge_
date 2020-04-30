import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import Favorites from './components/Favorites'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route path="/myfavorite">
          <Favorites />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </Provider>
  );
}
export default App;
