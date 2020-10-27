import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Header from "../header/header";
import ReviewList from "../review-list/review-list";
import reviewForm from "../new-review-form/new-review-form";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import {TO_PERCENT} from "../../const";

const OfferScreen = (props) => {

  const {offers} = props;

  const offer = offers[0];
  const nearOffers = offers.length > 3 ? offers.slice(0, 3) : offers;

  const ratingOfferPercent = Math.round(offer.rating) * TO_PERCENT;

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.pictures.map((picture, i) =>
                <div className="property__image-wrapper" key = {i}>
                  <img className="property__image" src={picture.src} alt={picture.description}/>
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> :
                ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                {offer.isFavorite ?
                  <button className="property__bookmark-button place-bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-button--active" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                  :
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                }
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingOfferPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.features.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.features.badrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.features.adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.things.map((thing, i)=>
                    <li className="property__inside-item" key={i} >
                      {thing}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={offer.owner.super ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.owner.picture} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.owner.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.reviews.length}</span></h2>
                <ReviewList
                  reviews={offer.reviews}
                />
                <reviewForm
                  reviews={offer.reviews}
                />
              </section>
            </div>
          </div>

          <Map
            offers={nearOffers}
            classMap={`property__map`}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <OfferList
              offers={nearOffers}
              classList={`near-places__list`}
              classCard={`near-places__card`}
              classImageWrapper={`near-places__image-wrapper`}
            />

          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = ((offers) => ({
  offers,
}));

export {OfferScreen};
export default connect(mapStateToProps)(OfferScreen);

