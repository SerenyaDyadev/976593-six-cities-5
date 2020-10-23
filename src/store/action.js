export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORT: `UPDATE_SORT`
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
  updateSort: (sortType) => ({
    type: ActionType.UPDATE_SORT,
    payload: sortType,
  })
};
