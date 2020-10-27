import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const OfferList = (props) => {
  const {
    offers,
    hoverUpdateOfferId,
    classList,
    classCard,
    classImageWrapper} = props;

  return (
    <div
      onMouseOver={(evt) => {
        if (typeof hoverUpdateOfferId === `function`) {
          if (!evt.target.closest(`.place-card`)) {
            return;
          }
          const offerId = evt.target.closest(`.place-card`).id;
          hoverUpdateOfferId(offerId);
        }
      }}
      className={`${classList} ${classList !== `favorites__places` ? `places__list` : ``}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          classCard={classCard}
          classImageWrapper={classImageWrapper}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  hoverUpdateOfferId: PropTypes.func.isRequired,
  classList: PropTypes.string.isRequired,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired
};

export default OfferList;
