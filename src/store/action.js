export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORT: `UPDATE_SORT`,
  OPEN_SORT: `OPEN_SORT`,
  HOVER_UPDATE_OFFER_ID: `HOVER_UPDATE_OFFER_ID`
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
  }),
  hoverUpdateOfferId: (id) => ({
    type: ActionType.HOVER_UPDATE_OFFER_ID,
    payload: id,
  }),
  openSortList: (openSort) => ({
    type: ActionType.OPEN_SORT,
    payload: openSort
  })
};
