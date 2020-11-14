import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {Link} from "react-router-dom";
import FavoriteList from "../favorite-list/favorite-list";
import {fetchFavoriteOffersList} from "../../store/api-actions";
import {connect} from 'react-redux';


class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getFavoriteOffers} = this.props;

    getFavoriteOffers();
  }

  render() {
    const {favoriteOffers, getFavoriteOffers} = this.props;

    return (
      <div className="page">

        <Header />

        {favoriteOffers.length === 0 ?
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            </div>
          </main>
          :
          <FavoriteList
            offers={favoriteOffers}
            getFavoriteOffers={getFavoriteOffers}
          />
        }
        <footer className="footer container">
          <Link to="/login" className="footer__logo-link" href="#">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  getFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ACTIONS}) => ({
  favoriteOffers: ACTIONS.favoriteOffers
});

const mapDispatchToProps = ((dispatch) => ({
  getFavoriteOffers() {
    dispatch(fetchFavoriteOffersList());
  }
}));

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
