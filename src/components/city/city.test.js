import React from "react";
import renderer from "react-test-renderer";
import City from "./city";

describe(`City render`, () => {
  it(`Should City render correctly`, () => {
    const component = renderer
      .create(<City
        city={`Amsterdam`}
        isCurrent={true}
        onCityClick={() => { }}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
