import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./posts/PostIndex";

const ShowArticle = () => {
  return (
    <Switch>
      {routes.map((item, key) => (
        <Route
          exact
          path={`/journal/${item.slug_title}`}
          component={item.component}
          key={key}
        />
      ))}

      <Redirect to="/journal" />
    </Switch>
  );
};

export default ShowArticle;