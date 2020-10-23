import {SortType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCityOffers = (offers, city) => {
  const cityOffers = offers.slice().filter((offer) => offer.city === city);

  return cityOffers;
};

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
