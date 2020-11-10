import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {reviews} from "../../mocks/data";

describe(`Review render`, () => {
  it(`Should Comment render correctly`, () => {
    const tree = renderer
    .create(<Review
      review={reviews[0]}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
