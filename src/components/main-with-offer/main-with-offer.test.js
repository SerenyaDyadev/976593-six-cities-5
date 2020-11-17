import React from "react";
import renderer from "react-test-renderer";
import {MainWithOffer} from "./main-with-offer";
import {offers} from "../../mocks/data";

const noop = () => { };

jest.mock(`../city-list/city-list`, () => `CityList`);
jest.mock(`../offer-list/offer-list`, () => `OfferList`);
jest.mock(`../sort/sort`, () => `Sort`);
jest.mock(`../map/map`, () => `Map`);

it(`MainWithOffer render`, () => {
  const tree = renderer
    .create(
        <MainWithOffer
          city={`Amsterdam`}
          offers={offers}
          currentSort={`Popular`}
          updateActiveOfferIdAction={noop}
          openSort={false}
          openSortListAction={noop}
        />
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});

