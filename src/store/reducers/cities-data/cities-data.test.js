import {citiesData} from "./cities-data";
import {ActionType} from "../../action";
import {CITIES} from "../../../const";

describe(`Reducer citiesData work correctly`, () => {
  const cities = Object.values(CITIES);

  const initialState = {
    cities,
    city: CITIES.AMSTERDAM,
  };

  it(`Reducer citiesData work correctly`, () => {
    expect(citiesData(initialState, ActionType.CHANGE_CITY)).toEqual({
      city: `Amsterdam`,
      cities
    });
  });
});
