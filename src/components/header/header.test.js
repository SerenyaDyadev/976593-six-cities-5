import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";

describe(`Header render`, () => {
  it(`Header without authorization`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            authorizationStatus={`NO_AUTH`}
            email={``}
          />
        </BrowserRouter>
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Header with authorization`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            authorizationStatus={`AUTH`}
            email={`test@mail.ru`}
          />
        </BrowserRouter>
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
