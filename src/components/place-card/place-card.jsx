import React from "react";
import PropTypes from "prop-types";
import {TO_PERCENT} from "../../const";
import {Link} from "react-router-dom";

const PlaceCard = (props) => {
  const {offer, onHover} = props;

  const ratingOfferPercentege = Math.round(offer.rating) * TO_PERCENT;

  return (
    <article className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onHover();
      }}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.pictures[0].src} width="260" height="200" alt={offer.pictures[0].description} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;  night</span>
          </div>
          {offer.isFavorite
            ?
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
            :
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingOfferPercentege}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.features.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    features: PropTypes.shape({
      type: PropTypes.string.isRequired,
      badrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired
};

export default PlaceCard;
