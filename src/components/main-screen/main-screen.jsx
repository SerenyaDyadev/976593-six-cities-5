import React from "react";
import PropTypes from "prop-types";
import MainNoOffer from "../main-no-offer/main-no-offer";
import MainWithOffer from "../main-with-offer/main-with-offer";
import Header from "../header/header";
import {connect} from 'react-redux';
import {getCityOffers} from '../../utils';

const MainScreen = (props) => {

  const {
    city,
    offers,
    cities} = props;

  return (
    <div className="page page--gray page--main">

      <Header />

      {offers.length === 0 ?
        <MainNoOffer
          cities={cities}
          city={city}
        />
        :
        <MainWithOffer
          cities={cities}
          city={city}
          offers={offers}
        />
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

