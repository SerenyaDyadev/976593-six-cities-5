import React from "react";
import renderer from "react-test-renderer";
import City from "./city";

it(`City render`, () => {
  const tree = renderer
    .create(
        <City
          city={`Amsterdam`}
          isCurrent={true}
          handleCityClick={() => { }}
        />
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});
