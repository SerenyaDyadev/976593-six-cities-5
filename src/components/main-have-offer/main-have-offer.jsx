import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import CityList from "../city-list/city-list";
import Map from "../map/map";
import Sort from "../sort/sort";


const MainHaveOffer = (props) => {
  const {cities, city, offers} = props;

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
              <span className="places__sorting-type" tabIndex="0"> Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>

              <Sort />

            </form>

            <OfferList
              offers={offers}
              classList={`cities__places-list tabs__content`}
              classCard={`cities__place-card`}
              classImageWrapper={`cities__image-wrapper`}
            />

          </section>
          <div className="cities__right-section">

            <Map
              offers={offers}
              classMap={`cities__map`}
            />

          </div>
        </div>
      </div>
    </main>
  );
};

MainHaveOffer.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default MainHaveOffer;
