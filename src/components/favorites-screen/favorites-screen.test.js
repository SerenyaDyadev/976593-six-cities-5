import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FavoritesScreen} from "./favorites-screen";
import {offers} from "../../mocks/data";

const noop = () => {};
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../favorite-list/favorite-list`, () => `FavoriteList`);

describe(`FavoritesScreen render`, () => {
  it(`Should FavoritesScreen render correctly`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <FavoritesScreen
            favoriteOffers={offers}
            getFavoriteOffers={noop}
          >
          </FavoritesScreen>
        </BrowserRouter>
    )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should FavoritesScreen without offers render correctly`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <FavoritesScreen
            favoriteOffers={[]}
            getFavoriteOffers={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
