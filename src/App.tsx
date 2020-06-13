import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/main.scss";
import "utils/chart";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props: any) => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
    </div>
  </Router>
);