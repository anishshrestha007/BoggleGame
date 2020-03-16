import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BoogleGame from "./game/BoggleGame";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import DashBoard from "./game/DashBoard";
import GameLogo from "../../assets/images/GameLogo.png";
import { Image } from "semantic-ui-react";

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <React.Fragment>
              <Image src={GameLogo} wrapped ui={false} />
              <Route exact path="/" render={() => <DashBoard />} />
              <Route
                path="/game"
                render={() => <BoogleGame boggleParam="Hello from game!" />}
              />
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
