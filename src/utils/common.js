export const adaptOfferToApp = (offer) => {
  const adaptedOffer = {
    id: offer.id,
    city: offer.city.name,
    cityCoordinates: [offer.city.location.latitude, offer.city.location.longitude],
    mapZoom: offer.city.location.zoom,
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
