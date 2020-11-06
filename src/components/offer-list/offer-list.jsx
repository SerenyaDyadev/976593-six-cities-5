import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {changeFavorite} from "../../store/api-actions";
import {checkFavorite} from "../../utils";
import OfferCard from "../offer-card/offer-card";

const OfferList = (props) => {
  const {
    offers,
    updateActiveOfferIdAction,
    classList,
    classCard,
    classImageWrapper,
    changeFavoriteStatusAction
  } = props;


  const onFavoriteButtonClick = (evt) => {
    const offer = evt.target.closest(`.place-card`);
    const isActiveFavorite = evt.target.closest(`.place-card__bookmark-button`).classList.value.indexOf(`place-card__bookmark-button--active`);

    if (!offer || !isActiveFavorite) {
      return;
    }

    changeFavoriteStatusAction(offer.id, checkFavorite(isActiveFavorite));
  };

  return (
    <div
      onMouseOver={(evt) => {
        if (typeof updateActiveOfferIdAction === `function`) {
          if (!evt.target.closest(`.place-card`)) {
            return;
          }
          const offerId = evt.target.closest(`.place-card`).id;
          updateActiveOfferIdAction(offerId);
        }
      }}
      className={`${classList} ${classList !== `favorites__places` ? `places__list` : ``}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          classCard={classCard}
          classImageWrapper={classImageWrapper}
          onFavoriteButtonClick={onFavoriteButtonClick}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.array,
  updateActiveOfferIdAction: PropTypes.func,
  classList: PropTypes.string.isRequired,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = ((dispatch) => ({
  changeFavoriteStatusAction(id, bool) {
    dispatch(changeFavorite(id, bool));
  }
}));

export {OfferList};
export default connect(null, mapDispatchToProps)(OfferList);
