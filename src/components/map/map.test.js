import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {offers} from "../../mocks/data";


describe(`Map render`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer.create(
        <Map
          offers={offers}
          activeOfferId={`0`}
          cityCoordinates={[52.3909553943508, 4.85309666406198]}
          mapZoom={8}
          classMap={`cities__map`}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
