
import {adaptOfferToApp, adaptReviewToApp} from "../utils/common";
import {AuthorizationStatus} from "../utils/const";
import {
  getOffers,
  getReviews,
  getNearbyOffers,
  requireAuthorization,
  redirectToRoute,
  saveUserEmail,
  getFavoriteOffers,
  updateErrorStatus,
} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then(({data}) => dispatch(getOffers(data.map(adaptOfferToApp))));
};

export const fetchNearbyOffersList = (offerId) => (dispatch, _getState, api) => {
  return api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(getNearbyOffers(data.map(adaptOfferToApp))));
};

export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => {
  return api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(saveUserEmail(data.email));
      dispatch(redirectToRoute(`/`));
    });
};

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => {
  return api.get(`/favorite`)
    .then(({data}) => dispatch(getFavoriteOffers(data.map(adaptOfferToApp))));
};

export const changeFavorite = (offerId, status) => (dispatch, _getState, api) => {
  return api.post(`/favorite/${offerId}/${status}`)
    .then(() => {
      dispatch(fetchOffersList());
      dispatch(fetchFavoriteOffersList());
    });
};

export const sendReview = ({comment, rating}, offerId) => (dispatch, _getState, api) => {
  return api.post(`/comments/${offerId}`, {comment, rating})
  .then(({data}) => dispatch(getReviews(data.map(adaptReviewToApp))))
  .catch((err) => {
    dispatch(updateErrorStatus(true));
    throw err;
  });
};
