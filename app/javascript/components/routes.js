// Reference : https://reacttraining.com/react-router/web/example/auth-workflow
import React from "react";
import DashBoard from "./game/DashBoard";
import BoggleGame from "./game/BoggleGame";
import GameReview from "./game/GameReview";
import PageNotFound from "./generics/PageNotFound";

// Public Routes : Can be accessed anonymously
export const publicRoutes = [
  { path: "/", exact: true, name: "DashBoard", component: DashBoard }
];

// Invalid Routes handled here
export const invalidRoutes = [
  { path: "*", name: "PageNotFound", component: PageNotFound }
];

// Private Routes : game info required
export const privateRoutes = [
  {
    path: "/BoggleGame",
    name: "BoggleGame",
    component: BoggleGame
  },
  {
    path: "/GameReview",
    name: "GameReview",
    component: GameReview
  }
];
