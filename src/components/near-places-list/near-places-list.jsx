import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import NearCard from "../near-card/near-card";

class NearPlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOpen: null
    };
  }

  render() {
    const {nearOffers} = this.props;

    return (
      <div className="near-places__list places__list">
        {nearOffers.map((offer) => (
          <NearCard
            key={offer.id}
            offer={offer}
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

NearPlacesList.propTypes = {
  nearOffers: PropTypes.array.isRequired
};

export default NearPlacesList;
