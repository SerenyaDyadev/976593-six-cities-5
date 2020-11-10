import React from "react";
import renderer from "react-test-renderer";
import MainNoOffer from "./main-no-offer";
import {cities} from "../../mocks/data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);

describe(`MainNoOffer render`, () => {
  const initialState = {
    CITIES: {
      city: `Amsterdam`,
      cities
    }
  };
  const store = mockStore(initialState);
  it(`Should MainNoOffer render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MainNoOffer
              city={`Amsterdam`}
              cities={cities}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
