import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FavoriteButton} from "./favorite-button";
import {offers} from "../../mocks/data";

describe(`FavoriteButton render`, () => {
  it(`FavoriteButton without authorization`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteButton
            offer={offers[0]}
            classCard={`place-card`}
            currentCity={`Dusseldorf`}
            authorizationStatus={`NO_AUTH`}
            changeFavoriteStatusAction={() => { }}
          />
        </BrowserRouter>
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AuthScreen with authorization`, () => {
    const tree = renderer
    .create(
        <FavoriteButton
          offer={offers[0]}
          classCard={`place-card`}
          currentCity={`Dusseldorf`}
          authorizationStatus={`AUTH`}
          changeFavoriteStatusAction={() => { }}
        />
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

