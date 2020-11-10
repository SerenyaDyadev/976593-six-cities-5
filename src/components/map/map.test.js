import React from "react";
import renderer from "react-test-renderer";
import {Map} from "../map/map";
import {offers} from "../../mocks/data";


describe(`Map render`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer.create(
        <Map
          offers={offers}
          mainOffer={offers[0]}
          activeOfferId={`0`}
          cityCoordinates={[52.3909553943508, 4.85309666406198]}
          cityZoom={8}
          classMap={`cities__map`}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
