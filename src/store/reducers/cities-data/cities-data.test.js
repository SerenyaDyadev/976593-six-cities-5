import {citiesData} from "./cities-data";
import {ActionType} from "../../action";
import {cities} from "../../../mocks/data";

describe(`Reducer citiesData work correctly`, () => {

  const initialState = {
    cities,
    city: `Amsterdam`,
  };

  it(`Reducer citiesData work correctly`, () => {
    expect(citiesData(initialState, ActionType.CHANGE_CITY)).toEqual({
      city: `Amsterdam`,
      cities
    });
  });
});
