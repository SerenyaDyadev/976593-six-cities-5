import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import NoFavoritesScreen from "../no-favorites-screen/no-favorites-screen";
import FavoriteList from "../favorite-list/favorite-list";
import Footer from "../footer/footer";
import {getFavoriteOffers} from '../../utils';
import {connect} from 'react-redux';


const FavoritesScreen = (props) => {
  const {offers} = props;

  return (
    <div className="page">

      <Header />

      {offers.length === 0 ?
        <NoFavoritesScreen />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList
                offers={offers}
              />
            </section>
          </div>
        </main>
      }
      <Footer />
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (({OFFERS}) => ({
  offers: getFavoriteOffers(OFFERS.offers),
}));

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
