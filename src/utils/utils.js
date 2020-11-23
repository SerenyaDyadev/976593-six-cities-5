import moment from 'moment';
import {SortType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const dateFormat = (date) => {
  return moment(date).format(`MMMM DD`);
};

export const getSortedNewReviews = (reviews) =>
  reviews.slice(0, 10)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const sortCommentsByDate = (comments) => {
  return comments.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getCityOffers = (offers, city) => offers.slice().filter((offer) => offer.city === city);

export const getWidthIconFavorite = (classCard) => classCard === `place-card` ? `18` : `31`;
export const getHeightIconFavorite = (classCard) => classCard === `place-card` ? `19` : `33`;

export const getSortedOffers = (sortType, offers) => {
  const sortedOffers = offers.slice();
  switch (sortType) {
    case (SortType.POPULAR):
      return sortedOffers;
    case (SortType.PRICE_LOW_TO_HIGH):
      return sortedOffers.sort((offerA, offerB) => {
        return offerA.price - offerB.price;
      });
    case (SortType.PRICE_HIGH_TO_LOW):
      return sortedOffers.sort((offerA, offerB) => {
        return offerB.price - offerA.price;
      });
    case (SortType.RATING):
      return sortedOffers.sort((offerA, offerB) => {
        return offerB.rating - offerA.rating;
      });
  }

  return sortedOffers;
};

export const checkFavorite = (active) => active ? 1 : 0;
