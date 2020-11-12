import React from "react";
import renderer from "react-test-renderer";
import {CityList} from "./city-list";
import {cities} from "../../mocks/data";


it(`CityList render`, () => {
  const tree = renderer
  .create(
      <CityList
        cities={cities}
        currentCity={`Dusseldorf`}
        changeCityAction={() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});

