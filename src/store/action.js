export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  SORT_OFFERS: `SORT_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS,
    payload: []
  }),
  sortOffer: (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers,
  })
};
