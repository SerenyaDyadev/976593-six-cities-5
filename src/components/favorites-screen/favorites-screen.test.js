import React from "react";
import renderer from "react-test-renderer";
import {FavoritesScreen} from "./favorites-screen";
import {offers} from "../../mocks/data";

const noop = () => {};

describe(`FavoritesScreen render`, () => {
  it(`Should FavoritesScreen render correctly`, () => {
    const tree = renderer
    .create(<FavoritesScreen
      favoriteOffers={offers}
      getFavoriteOffers={noop}
    >
    </FavoritesScreen>, {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should FavoritesScreen without offers render correctly`, () => {
    const tree = renderer
    .create(<FavoritesScreen
      favoriteOffers={[]}
      getFavoriteOffers={noop}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
