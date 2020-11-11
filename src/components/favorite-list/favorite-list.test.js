import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import FavoriteList from "./favorite-list";
import {offers} from "../../mocks/data";

jest.mock(`../offer-list/offer-list`, () => `OfferList`);

it(`FavoriteList render`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <FavoriteList
          offers={offers}
        />
      </BrowserRouter>
  )

  .toJSON();

  expect(tree).toMatchSnapshot();
});
