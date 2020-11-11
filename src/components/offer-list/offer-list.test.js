import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";
import {offers} from "../../mocks/data";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

it(`OfferList render`, () => {
  const tree = renderer
    .create(
        <OfferList
          offers={offers}
          classList={`cities__places-list tabs__content`}
          classCard={`place-card`}
          classImageWrapper={`cities__image-wrapper`}
          updateActiveOfferIdAction={()=>{}}
        />
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});
