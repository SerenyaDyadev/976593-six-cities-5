import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {TO_PERCENT, AuthorizationStatus} from "../../const";

const OfferCard = (props) => {

  const {offer, classCard, classImageWrapper, onFavoriteButtonClick, authorizationStatus} = props;

  const ratingOfferPercentege = Math.round(offer.rating) * TO_PERCENT;

  const widthImg = classCard !== `favorites__card` ? 260 : 150;
  const heightImg = classCard !== `favorites__card` ? 200 : 110;


  return (
    <article className={`place-card ${classCard}`} id={offer.id}>
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        ``}
      <div className={`${classImageWrapper} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewPictures} width={widthImg} height={heightImg} alt="Place image" />
        </a>
      </div>
      <div className={`${classCard === `favorites__card` ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;  night</span>
          </div>

          {authorizationStatus === AuthorizationStatus.AUTH ?
            <button onClick={onFavoriteButtonClick} className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
            :
            <Link to="/login" className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </Link>
          }

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingOfferPercentege}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>
            ${offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.features.type[0].toUpperCase() + offer.features.type.slice(1)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onHover: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  offer: PropTypes.shape({
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
  }).isRequired
};


const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export {OfferCard};
export default connect(mapStateToProps)(OfferCard);
