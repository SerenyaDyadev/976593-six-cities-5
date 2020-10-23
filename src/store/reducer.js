import {extend} from "../utils";
import {ActionType} from "./action";
import {generateOffer} from "../mocks/offer";
import {CITIES, SortType} from "../const";


const Settings = {
  OFFERS_COUNT: 4
};

const offers = new Array(Settings.OFFERS_COUNT).fill().map(generateOffer);

const initialState = {
  cities: Object.values(CITIES),
  city: CITIES.AMSTERDAM,
  offers,
  currentSort: SortType.POPULAR,
  openSort: false,
  hoverOfferId: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        offers
      });
    case ActionType.UPDATE_SORT:
      return extend(state, {
        currentSort: action.payload,
        openSort: false
      });
    case ActionType.HOVER_UPDATE_OFFER_ID:
      return extend(state, {
        hoverOfferId: action.payload
      });
    case ActionType.OPEN_SORT:
      return extend(state, {
        openSort: action.payload
      });
  }
  return state;
};

export {reducer};
