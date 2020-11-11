import {
  ActionType,
  changeCity,
  updateSort,
  updateActiveOfferId,
  openSortList,
  getOffers,
  getReviews,
  getNearbyOffers,
  requireAuthorization,
  redirectToRoute,
  saveUserEmail,
  changeFavoriteStatus,
  getFavoriteOffers,
  sendReview,
  updateErrorStatus
} from './action';

import {offers, reviews} from "../mocks/data";

const reviewData = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "rating": 4
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeCity returns correct action`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for updateSort returns correct action`, () => {
    expect(updateSort(`Rating`)).toEqual({
      type: ActionType.UPDATE_SORT,
      payload: `Rating`
    });
  });

  it(`Action creator for updateActiveOfferId returns correct action`, () => {
    expect(updateActiveOfferId(`1`)).toEqual({
      type: ActionType.UPDATE_ACTIVE_OFFER_ID,
      payload: `1`
    });
  });

  it(`Action creator for openSortList returns correct action`, () => {
    expect(openSortList(true)).toEqual({
      type: ActionType.OPEN_SORT,
      payload: true
    });
  });

  it(`Action creator for getOffers returns correct action`, () => {
    expect(getOffers(offers)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for getReviews returns correct action`, () => {
    expect(getReviews(reviews)).toEqual({
      type: ActionType.GET_REVIEWS,
      payload: reviews
    });
  });

  it(`Action creator for getNearbyOffers returns correct action`, () => {
    expect(getNearbyOffers(offers)).toEqual({
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for requireAuthorization returns correct action`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });

  it(`Action creator for redirectToRoute returns correct action`, () => {
    expect(redirectToRoute(`/`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    });
  });

  it(`Action creator for saveUserEmail returns correct action`, () => {
    expect(saveUserEmail(`Oliver.conner@gmail.com`)).toEqual({
      type: ActionType.SAVE_EMAIL,
      payload: `Oliver.conner@gmail.com`
    });
  });

  it(`Action creator for changeFavoriteStatus returns correct action`, () => {
    expect(changeFavoriteStatus(1, 0)).toEqual({
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: 1,
      status: 0,
    });
  });

  it(`Action creator for getFavoriteOffers returns correct action`, () => {
    expect(getFavoriteOffers(offers)).toEqual({
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for sendReview returns correct action`, () => {
    expect(sendReview(reviewData, `1`)).toEqual({
      type: ActionType.SEND_REVIEW,
      payload: reviewData,
      id: `1`,
    });
  });

  it(`Action creator for updateErrorStatus returns correct action`, () => {
    expect(updateErrorStatus(true)).toEqual({
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: true
    });
  });
});
