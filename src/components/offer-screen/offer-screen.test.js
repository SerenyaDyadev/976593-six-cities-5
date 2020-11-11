import React from "react";
import renderer from "react-test-renderer";
import {OfferScreen} from "./offer-screen";
import {offers, reviews} from "../../mocks/data";

const noop = () => {};

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);
jest.mock(`../review-list/review-list`, () => `ReviewList`);
jest.mock(`../review-form/review-form`, () => `ReviewForm`);
jest.mock(`../offer-list/offer-list`, () => `OfferList`);
jest.mock(`../map/map`, () => `Map`);

describe(`OfferScreen render`, () => {
  it(`OfferScreen with authorization`, () => {
    const tree = renderer
      .create(
          <OfferScreen
            offers={offers}
            nearbyOffers={offers}
            reviews={reviews}
            activeOfferId={`0`}
            getNearbyOffers={noop}
            getReviewsAction={noop}
            authorizationStatus={`AUTH`}
          />
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferScreen without authorization`, () => {
    const tree = renderer
      .create(
          <OfferScreen
            offers={offers}
            nearbyOffers={offers}
            reviews={reviews}
            activeOfferId={`0`}
            getNearbyOffers={noop}
            getReviewsAction={noop}
            authorizationStatus={`NO_AUTH`}
          />
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
