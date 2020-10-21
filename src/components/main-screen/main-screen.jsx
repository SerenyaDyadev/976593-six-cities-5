import React from "react";
import PropTypes from "prop-types";
import NoOfferScreen from "../no-offer-screen/no-offer-screen";
import Map from "../map/map";
import Header from "../header/header";
import OfferList from "../offer-list/offer-list";
import CityList from "../city-list/city-list";
import {connect} from 'react-redux';
import {getCityOffers} from '../../utils';

const MainScreen = (props) => {

  const {offers, cities, city} = props;

  return (
    <div className="page page--gray page--main">

      <Header />

      {offers.length === 0 ?
        <NoOfferScreen
          cities={cities}
          city={city}
        />
        :
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
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
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
      }
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};


const mapStateToProps = (({city, offers, cities}) => ({
  city,
  offers: getCityOffers(offers, city),
  cities
}));

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

