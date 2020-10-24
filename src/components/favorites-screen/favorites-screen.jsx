import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import NoFavoritesScreen from "../no-favorites-screen/no-favorites-screen";
import Footer from "../footer/footer";
import OfferList from "../offer-list/offer-list";
import {connect} from 'react-redux';


const FavoritesScreen = (props) => {
  const {offers} = props;
  const favoriteOffers = offers.slice().filter((offer) => offer.isFavorite);

  return (
    <div className="page">

      <Header />

      {favoriteOffers.length === 0 ?
        <NoFavoritesScreen />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
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

const mapStateToProps = (({offers}) => ({
  offers
}));

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
