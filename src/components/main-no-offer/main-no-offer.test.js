import React from "react";
import renderer from "react-test-renderer";
import MainNoOffer from "./main-no-offer";
import {cities} from "../../mocks/data";


jest.mock(`../city-list/city-list`, () => `CityList`);


it(`MainNoOffer render`, () => {
  const tree = renderer
    .create(
        <MainNoOffer
          city={`Amsterdam`}
          cities={cities}
        />
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
