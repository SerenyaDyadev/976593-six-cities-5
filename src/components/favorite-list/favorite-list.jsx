import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import {connect} from 'react-redux';


const FavoriteList = (props) => {
  const {offers, cities} = props;
  const favoriteOffers = offers.slice().filter((offer) => offer.isFavorite);

  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>city</span>
            </a>
          </div>
        </div>

        <OfferList
          offers={favoriteOffers}
          classList={`favorites__places`}
          classCard={`favorites__card`}
          classImageWrapper={`favorites__image-wrapper`}
        />

      </li>
    </ul>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (({CITIES, OFFERS}) => ({
  cities: CITIES.cities,
  offers: getfavoriteOffers(OFFERS.offers),
}));

export {FavoriteList};
export default connect(mapStateToProps)(FavoriteList);
