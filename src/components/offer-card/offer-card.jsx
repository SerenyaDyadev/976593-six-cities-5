import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import FavoriteButton from "../favorite-button/favorite-button";
import {TO_PERCENT, AppRoute} from "../../utils/const";
import {OfferPropTypes} from "../../utils/property-types";

const OfferCard = ({offer, classCard, classImageWrapper}) => {

  const ratingOfferPercentege = Math.round(offer.rating) * TO_PERCENT;
  const widthImg = classCard !== `favorites__card` ? 260 : 150;
  const heightImg = classCard !== `favorites__card` ? 200 : 110;


  return (
    <article className={`place-card ${classCard}`} id={offer.id}>
      {offer.isPremium ?
        <div
          className="place-card__mark">
          <span>
            Premium
          </span>
        </div> :
        ``}
      <div className={`${classImageWrapper} place-card__image-wrapper`}>
        <Link
          to={`${AppRoute.OFFER}${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewPictures}
            width={widthImg}
            height={heightImg}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`${classCard === `favorites__card` ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;  night</span>
          </div>

          <FavoriteButton
            offer={offer}
            classCard={`place-card`}
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingOfferPercentege}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.OFFER}${offer.id}`}>
              ${offer.title}
          </Link>
        </h2>
        <p
          className="place-card__type">
          {offer.features.type[0].toUpperCase() + offer.features.type.slice(1)}
        </p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onHover: PropTypes.func,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  offer: OfferPropTypes
};


const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export {OfferCard};
export default connect(mapStateToProps)(OfferCard);
