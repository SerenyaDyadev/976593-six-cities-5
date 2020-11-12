import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";

jest.mock(`../header/header`, () => `Header`);

describe(`AuthScreen render`, () => {
  it(`AuthScreen without authorization`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <AuthScreen
            city={`Paris`}
            onSubmit={() => {}}
            authorizationStatus={`NO_AUTH`}
          />
        </BrowserRouter>
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AuthScreen with authorization`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <AuthScreen
            city={`Paris`}
            onSubmit={() => {}}
            authorizationStatus={`AUTH`}
          />
        </BrowserRouter>
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
