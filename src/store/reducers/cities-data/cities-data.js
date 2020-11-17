import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {CITIES} from "../../../utils/const";

const initialState = {
  cities: Object.values(CITIES),
  city: CITIES.AMSTERDAM,
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
  }
  return state;
};

export {citiesData};
