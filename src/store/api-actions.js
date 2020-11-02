import {getOffers} from "./action";
import {adaptOfferToApp} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp))))
);
