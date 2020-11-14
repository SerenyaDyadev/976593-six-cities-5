import React from "react";
import renderer from "react-test-renderer";
import MainNoOffer from "./main-no-offer";


jest.mock(`../city-list/city-list`, () => `CityList`);


it(`MainNoOffer render`, () => {
  const tree = renderer
    .create(
        <MainNoOffer
          city={`Amsterdam`}
        />
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
