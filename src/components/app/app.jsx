import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import history from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../utils/const";


const App = () => {

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesScreen />
            );
          }}
        />
        <Route exact path={AppRoute.OFFER}>
          <OfferScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
