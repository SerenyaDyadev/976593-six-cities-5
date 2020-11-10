import React from "react";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";

const city = `Amsterdam`;
const authorizationStatus = `AUTH`;

describe(`AuthScreen Render`, () => {
  it(`AuthScreen component with authorizationStatus AUTH render correctly`, () => {
    const tree = renderer.create(
        <AuthScreen
          city={city}
          authorizationStatus={authorizationStatus}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
