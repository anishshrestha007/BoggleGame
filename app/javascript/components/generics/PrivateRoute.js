import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, game: game, ...rest }) {
  debugger;
  return (
    <Route
      {...rest}
      render={prop =>
        game.gameInfo.userName ? (
          <Component {...prop} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: prop.location
              },
              children: prop.children
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
