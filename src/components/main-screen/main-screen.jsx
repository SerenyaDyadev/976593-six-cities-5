import React from "react";
import PropTypes from "prop-types";
import MainNoOffer from "../main-no-offer/main-no-offer";
import MainWithOffer from "../main-with-offer/main-with-offer";
import Header from "../header/header";
import {connect} from 'react-redux';
import {getCityOffers} from '../../utils/utils';

const MainScreen = ({city, offers}) => {
  return (
    <div className="page page--gray page--main">

      <Header />

      {offers.length === 0 ?
        <MainNoOffer
          city={city}
        />
        :
        <MainWithOffer
          city={city}
          offers={offers}
        />
      }
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  city: PropTypes.string.isRequired,
};


const mapStateToProps = (({CITIES, OFFERS}) => ({
  city: CITIES.city,
  offers: getCityOffers(OFFERS.offers, CITIES.city)
}));

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

