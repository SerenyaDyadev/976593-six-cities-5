import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";


const FavoriteList = (props) => {
  const {offers} = props;

  const cities = [...new Set(offers.map((offer) => offer.city))];

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => (

        <li className="favorites__locations-items" key={i}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
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
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default FavoriteList;
