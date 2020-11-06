import moment from 'moment';
import {SortType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const dateFormat = (date) => {
  return moment(date).format(`MMMM DD`);
};

export const getCityOffers = (offers, city) => offers.slice().filter((offer) => offer.city === city);

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

export const checkFavorite = (active) => active === -1 ? 1 : 0;

export const adaptOfferToApp = (offer) => {
  const adaptedOffer = {
    id: offer.id,
    city: offer.city.name,
    cityCoordinates: [offer.city.location.latitude, offer.city.location.longitude],
    сityZoom: offer.city.location.zoom,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    coordinates: [offer.location.latitude, offer.location.longitude],
    description: offer.description,
    detailsMapZoom: offer.location.zoom,
    features: {
      type: offer.type,
      badrooms: offer.bedrooms,
      adults: offer.max_adults
    },
    price: offer.price,
    title: offer.title,
    pictures: offer.images,
    previewPictures: offer.preview_image,
    rating: offer.rating,
    owner: {
      name: offer.host.name,
      id: offer.host.id,
      picture: offer.host.avatar_url,
      super: offer.host.is_pro
    },
    things: offer.goods,
  };

  return adaptedOffer;
};

export const adaptReviewToApp = (comment) => {
  const adaptedReview = {
    id: comment.id,
    picture: comment.user.avatar_url,
    name: comment.user.name,
    rating: comment.rating,
    review: comment.comment,
    date: comment.date,
    super: comment.user.is_pro
  };

  return adaptedReview;
};
