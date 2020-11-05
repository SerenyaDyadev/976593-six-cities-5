import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import OfferList from "../offer-list/offer-list";


const FavoriteList = (props) => {
  const {offers} = props;

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
                    <Link to="/" className="locations__item-link" href="#">
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>

                <OfferList
                  offers={offers.slice().filter((offer) => offer.city === city)}
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
  offers: PropTypes.array.isRequired
};

export default FavoriteList;
