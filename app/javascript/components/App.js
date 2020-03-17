import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import GameLogo from "../../assets/images/GameLogo.png";
import { Image } from "semantic-ui-react";
import "./css/App.css";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoute from "./generics/PrivateRoute";
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

    const _privateRoutes = privateRoutes.map((route, index) => {
      return route.component ? (
        <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
          game={_state.game}
        />
      ) : null;
    });
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Suspense>
            <Switch>
              <div className="app">
                <Image src={GameLogo} centered />
                {_publicRoutes}
                {_privateRoutes}
              </div>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
