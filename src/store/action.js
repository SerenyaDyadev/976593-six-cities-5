export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORT: `UPDATE_SORT`,
  OPEN_SORT: `OPEN_SORT`,
  UPDATE_ACTIVE_OFFER_ID: `UPDATE_ACTIVE_OFFER_ID`,
  GET_OFFERS: `GET_OFFERS`,
  GET_NEAR_OFFERS: `GET_NEAR_OFFERS:`,
  GET_REVIEWS: `GET_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
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

export const getNearOffers = (offers) => ({
  type: ActionType.GET_NEAR_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
