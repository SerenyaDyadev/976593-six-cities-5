import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../utils/property-types";
import {Link} from "react-router-dom";
import OfferList from "../offer-list/offer-list";
import {AppRoute} from "../../utils/const";
import {getCityOffers} from "../../utils/utils";


const FavoriteList = ({offers}) => {

  const cities = [...new Set(offers.map((offer) => offer.city))];

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city, i) => (

              <li className="favorites__locations-items" key={`${city}-${i}`}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link
                      to={AppRoute.ROOT}
                      className="locations__item-link"
                      href="#">
                      <span>
                        {city}
                      </span>
                    </Link>
                  </div>
                </div>

                <OfferList
                  offers={getCityOffers(offers, city)}
                  classList={`favorites__places`}
                  classCard={`favorites__card`}
                  classImageWrapper={`favorites__image-wrapper`}
                />

              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>

  );
};

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default FavoriteList;
