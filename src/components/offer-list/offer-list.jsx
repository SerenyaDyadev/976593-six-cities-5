import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOpen: null
    };
  }

  render() {
    const {offers, classList, classCard, classImageWrapper} = this.props;

    return (
      <div className={`${classList} ${classList !== `favorites__places` ? `places__list` : `` }`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            classCard={classCard}
            classImageWrapper={classImageWrapper}
            onHover={() => {
              this.setState(() => ({
                offerOpen: offer,
              }));
            }}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  classList: PropTypes.string.isRequired,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired
};

export default OfferList;
