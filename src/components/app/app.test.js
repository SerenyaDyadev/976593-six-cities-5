import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {offers, cities} from "../../mocks/data";
import App from "./app";

const mockStore = configureStore([]);

describe(`App render`, () => {
  const initialState = {
    CITIES: {
      city: `Amsterdam`,
      cities
    },
    ACTIONS: {
      currentSort: `Popular`,
      openSort: false,
      activeOfferId: `0`
    },
    OFFERS: {
      offers
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      email: ``
    }
  };

  const store = mockStore(initialState);
  it(`App render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

