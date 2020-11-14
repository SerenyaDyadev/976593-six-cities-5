import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {checkFavorite, getWidthIconFavorite, getHeightIconFavorite} from "../../utils/utils";
import {changeFavorite} from "../../store/api-actions";
import {AuthorizationStatus} from "../../utils/const";

const FavoriteButton = (props) => {
  const {offer, classCard, authorizationStatus, changeFavoriteStatusAction} = props;

  const onFavoriteButtonClick = () => {

    changeFavoriteStatusAction(offer.id, checkFavorite(!offer.isFavorite));
  };


  const widthIcon = getWidthIconFavorite(classCard);
  const heightIcon = getHeightIconFavorite(classCard);

  return (
    <div>
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <button onClick={onFavoriteButtonClick} className={`button ${classCard}__bookmark-button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
          <svg className={`place-card__bookmark-icon`} width={widthIcon} height={heightIcon}>
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
        :
        <Link to="/login" className={`button ${classCard}__bookmark-button`} type="button">
          <svg className={`${classCard}__bookmark-icon`} width={widthIcon} height={heightIcon}>
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </Link>
      }
    </div >
  );
};

FavoriteButton.propTypes = {
  offer: PropTypes.object.isRequired,
  classCard: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
};


const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = ((dispatch) => ({
  changeFavoriteStatusAction(id, bool) {
    dispatch(changeFavorite(id, bool));
  }
}));

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
