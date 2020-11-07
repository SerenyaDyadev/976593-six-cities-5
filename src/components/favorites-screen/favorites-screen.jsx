import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {Link} from "react-router-dom";
import NoFavoritesScreen from "../no-favorites-screen/no-favorites-screen";
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
          <NoFavoritesScreen />
          :
          <FavoriteList
            offers={favoriteOffers}
            getFavoriteOffers={getFavoriteOffers}
          />
        }
        <footer className="footer container">
          <Link to="/login" className="footer__logo-link" href="/">
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
