import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BoogleGame from "./BoggleGame";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home !!"} />
            <Route
              path="/game"
              render={() => <BoogleGame boggleParam="Hello from game!" />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
