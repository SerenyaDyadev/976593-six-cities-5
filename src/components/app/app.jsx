import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyCard from "../property-screen/property-screen";

const App = (props) => {

  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id?">
          <PropertyCard
            offer={offers[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
