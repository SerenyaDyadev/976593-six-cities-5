import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {SortType} from "../../../const";

const initialState = {
  currentSort: SortType.POPULAR,
  openSort: false,
  activeOfferId: ``,
  reviews: [],
  nearOffers: []
};

const offersActions = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_SORT:
      return extend(state, {
        currentSort: action.payload,
        openSort: false
      });
    case ActionType.UPDATE_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload
      });
    case ActionType.OPEN_SORT:
      return extend(state, {
        openSort: action.payload
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.GET_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload
      });
  }
  return state;
};

export {offersActions};


