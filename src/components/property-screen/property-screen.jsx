import React from "react";
import PropTypes from "prop-types";
import ListReviews from "../list-reviews/list-reviews";
import NewReviewForm from "../new-review-form/new-review-form";
import NearPlacesList from "../near-places-list/near-places-list";
import MapNear from "../map-near/map-near";
import {TO_PERCENT} from "../../const";

const PropertyScreen = (props) => {

  const {nearOffers, offer} = props;

  const ratingOfferPercent = Math.round(offer.rating) * TO_PERCENT;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                <ListReviews
                  reviews={offer.reviews}
                />
                <NewReviewForm
                  reviews={offer.reviews}
                />
              </section>
            </div>
          </div>

          <MapNear
            nearOffers={nearOffers}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <NearPlacesList
              nearOffers={nearOffers}
            />

          </section>
        </div>
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  offer: PropTypes.object.isRequired,
  nearOffers: PropTypes.array.isRequired
};

export default PropertyScreen;
