import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import MainNoOffer from "./main-no-offer";
import {cities} from "../../mocks/data";


jest.mock(`../city-list/city-list`, () => `CityList`);


it(`MainNoOffer render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MainNoOffer
            city={`Amsterdam`}
            cities={cities}
          />
        </BrowserRouter>
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
