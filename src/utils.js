export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCityOffers = (offers, city) => {
  const cityOffers = offers.slice().filter((offer) => offer.city === city);

  return cityOffers;
};
