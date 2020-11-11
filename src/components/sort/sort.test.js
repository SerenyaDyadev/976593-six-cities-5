import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort";

const noop = () => {};

describe(`Sort render`, () => {
  it(`Sorting open`, () => {
    const tree = renderer
    .create(
        <Sort
          currentSort={`Popular`}
          openSort={true}
          updateSortAction={noop}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Sorting close`, () => {
    const tree = renderer
      .create(
          <Sort
            currentSort={`Popular`}
            openSort={false}
            updateSortAction={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
