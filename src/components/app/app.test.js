import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {App} from "./app";
import {offers} from "../../mocks/data";


jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../auth-screen/auth-screen`, () => `AuthScreen`);
jest.mock(`../favorites-screen/favorites-screen`, () => `FavoritesScreen`);
jest.mock(`../offer-screen/offer-screen`, () => `OfferScreen`);
jest.mock(`../main-screen/main-screen`, () => `MainScreen`);

it(`App render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <App
            offers={offers}
          />
        </BrowserRouter>
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});

