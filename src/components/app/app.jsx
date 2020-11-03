import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";


const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <PrivateRoute
          exact path={`/favorites`}
          render={() => {
            return (
              <FavoritesScreen />
            );
          }}
        />
        <Route exact path="/offer/:id">
          <OfferScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
