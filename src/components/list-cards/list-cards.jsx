import React from "react";
import PropTypes from "prop-types";

const ListCards = (props) => {

  const {offers, onOfferButtonClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <article className="cities__place-card place-card" key={offer.features.type}>
          {offer.premium ? <div className="place-card__mark">
            <span>Premium</span>
          </div> : ``}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#" onClick={onOfferButtonClick}>
              <img className="place-card__image" src={offer.pictures[0].src} width="260" height="200" alt={offer.pictures[0].description} />
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;  night</span>
              </div>
              <button className="place-card__bookmark-button button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: offer.rating * 10}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#" onClick={onOfferButtonClick}>{offer.title}</a>
            </h2>
            <p className="place-card__type">{offer.features.type}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ListCards;

ListCards.propTypes = {
  onOfferButtonClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  offer: PropTypes.shape({
    features: PropTypes.shape({
      type: PropTypes.string.isRequired,
      badrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired
    }).isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  })
};
