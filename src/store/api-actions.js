import {getOffers, getReviews} from "./action";
import {adaptOfferToApp, adaptReviewToApp} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp))))
);

export const fetchCommentsList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))))
);
