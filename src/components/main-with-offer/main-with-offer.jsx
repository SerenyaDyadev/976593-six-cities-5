import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import CityList from "../city-list/city-list";
import Map from "../map/map";
import Sort from "../sort/sort";
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {getSortedOffers} from "../../utils";


const MainWithOffer = (props) => {
  const {cities, city, offers, currentSort, hoverUpdateOfferId, openSort, openSortList} = props;

  const sortedOffers = getSortedOffers(currentSort, offers);

  const getOpenSortList = (evt) => {
    evt.preventDefault();
    if (openSort) {
      openSortList(false);
    } else {
      openSortList(true);
    }
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">

          <CityList
            cities={cities}
            currentCity={city}
          />

        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span onClick={getOpenSortList} className="places__sorting-type" tabIndex="0"> {currentSort}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>

              <Sort />

            </form>

            <OfferList
              offers={sortedOffers}
              hoverUpdateOfferId={hoverUpdateOfferId}
              classList={`cities__places-list tabs__content`}
              classCard={`cities__place-card`}
              classImageWrapper={`cities__image-wrapper`}
            />

          </section>
          <div className="cities__right-section">

            <Map
              offers={sortedOffers}
              classMap={`cities__map`}
            />

          </div>
        </div>
      </div>
    </main>
  );
};

MainWithOffer.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  hoverOfferId: PropTypes.string.isRequired,
  hoverUpdateOfferId: PropTypes.func.isRequired,
  openSort: PropTypes.bool.isRequired,
  openSortList: PropTypes.func.isRequired,
};


const mapStateToProps = (({currentSort, openSort, hoverOfferId, hoverUpdateOfferId}) => ({
  currentSort,
  hoverOfferId,
  hoverUpdateOfferId,
  openSort
}));

const mapDispatchToProps = ((dispatch) => ({
  hoverUpdateOfferId(id) {
    dispatch(ActionCreator.hoverUpdateOfferId(id));
  },
  openSortList(bool) {
    dispatch(ActionCreator.openSortList(bool));
  }
}));

export {MainWithOffer};
export default connect(mapStateToProps, mapDispatchToProps)(MainWithOffer);


