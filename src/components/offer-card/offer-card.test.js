import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {OfferCard} from "./offer-card";
import {offers} from "../../mocks/data";

jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);

it(`OfferCard render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferCard
            offer={offers[0]}
            classCard={`place-card`}
            classImageWrapper={`cities__image-wrapper`}
          />
        </BrowserRouter>
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});
