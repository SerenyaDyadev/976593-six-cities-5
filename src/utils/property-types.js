import PropTypes from 'prop-types';

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  features: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  previewPictures: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;

