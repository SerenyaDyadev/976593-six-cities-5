import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";
import {offers, cities} from "../../mocks/data";


jest.mock(`../header/header`, () => `Header`);
jest.mock(`../main-no-offer/main-no-offer`, () => `MainNoOffer`);
jest.mock(`../main-with-offer/main-with-offer`, () => `MainWithOffer`);

describe(`MainScreen render`, () => {
  it(`MainPage without offers`, () => {
    const tree = renderer
      .create(
          <MainScreen
            city={`Amsterdam`}
            cities={cities}
            offers={[]}
          />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MainScreen with offers`, () => {
    const tree = renderer
      .create(
          <MainScreen
            city={`Amsterdam`}
            cities={cities}
            offers={offers}
          />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
