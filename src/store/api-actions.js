import {adaptOfferToApp, adaptReviewToApp} from "../utils";
import {AuthorizationStatus} from "../const";
import {
  getOffers,
  getReviews,
  getNearbyOffers,
  requireAuthorization,
  redirectToRoute,
  saveUserEmail,
  getFavoriteOffers,
  updateErrorStatus
} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp))))
);

export const fetchNearbyOffersList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(getNearbyOffers(data.map(adaptOfferToApp))))
);

export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);
export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(saveUserEmail(email)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const changeFavorite = (offerId, status) => (dispatch, _getState, api) => {
  api.post(`/favorite/${offerId}/${status}`)
  .then(api.get(`/hotels`)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp)))))
    .then(api.get(`/favorite`)
      .then(({data}) => dispatch(getFavoriteOffers(data.map(adaptOfferToApp)))));
};

export const sendComment = ({review, rating}, offerId) => (dispatch, _getState, api) => {
  api.post(`/comments/${offerId}`, {review, rating})
    .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))))
  .catch((err) => {
    dispatch(updateErrorStatus(true));
    throw err;
  });
};
