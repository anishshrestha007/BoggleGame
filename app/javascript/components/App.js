import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import GameLogo from "../../assets/images/GameLogo.png";
import { Image } from "semantic-ui-react";
import "./css/App.css";
import { publicRoutes, privateRoutes, invalidRoutes } from "./routes";
import PrivateRoute from "./generics/PrivateRoute";
import { SemanticToastContainer } from "react-semantic-toasts";
const store = configureStore();
class App extends React.Component {
  render() {
    const _state = store.getState();

    const _publicRoutes = publicRoutes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => <route.component {...props} />}
        />
      ) : null;
    });
    const _invalidRoutes = invalidRoutes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => <route.component {...props} />}
        />
      ) : null;
    });

    const _privateRoutes = privateRoutes.map((route, index) => {
      return route.component ? (
        <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
          gameStore={store}
        />
      ) : null;
    });
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Image src={GameLogo} centered />
            <SemanticToastContainer position="top-right" />
            <Switch>
              {_publicRoutes}
              {_privateRoutes}
              {_invalidRoutes}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
