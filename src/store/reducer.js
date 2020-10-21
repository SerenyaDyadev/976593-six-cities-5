import {extend} from "../utils";
import {ActionType} from "./action";
import {generateOffer} from "../mocks/offer";
import {CITIES} from "../const";


const Settings = {
  OFFERS_COUNT: 4
};

const offers = new Array(Settings.OFFERS_COUNT).fill().map(generateOffer);

const initialState = {
  cities: Object.values(CITIES),
  city: CITIES.AMSTERDAM,
  offers
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
  }
  return state;
};

export {reducer};
