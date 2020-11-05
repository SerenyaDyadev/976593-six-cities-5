export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORT: `UPDATE_SORT`,
  OPEN_SORT: `OPEN_SORT`,
  UPDATE_ACTIVE_OFFER_ID: `UPDATE_ACTIVE_OFFER_ID`,
  GET_OFFERS: `GET_OFFERS`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS:`,
  GET_REVIEWS: `GET_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_EMAIL: `SAVE_EMAIL`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  SEND_REVIEW: `SEND_REVIEW`,
  UPDATE_ERROR_STATUS: `UPDATE_ERROR_STATUS`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const updateOffers = () => ({
  type: ActionType.UPDATE_OFFERS,
  payload: []
});

export const updateSort = (sortType) => ({
  type: ActionType.UPDATE_SORT,
  payload: sortType,
});

export const updateActiveOfferId = (id) => ({
  type: ActionType.UPDATE_ACTIVE_OFFER_ID,
  payload: id,
});

export const openSortList = (openSort) => ({
  type: ActionType.OPEN_SORT,
  payload: openSort
});

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
});

export const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const saveUserEmail = (email) => ({
  type: ActionType.SAVE_EMAIL,
  payload: email,
});

export const getFavoriteOffers = (offers) => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: offers,
});

export const changeFavoriteStatus = (id, status) => ({
  type: ActionType.CHANGE_FAVORITE_STATUS,
  payload: id, status
});

export const sendReview = (reviewData, id) => ({
  type: ActionType.SEND_REVIEW,
  payload: reviewData, id
});

export const updateErrorStatus = (answer) => ({
  type: ActionType.UPDATE_ERROR_STATUS,
  payload: answer
});
