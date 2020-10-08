import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

class ListCards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOpen: null
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
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

export default ListCards;

ListCards.propTypes = {
  offers: PropTypes.array.isRequired,
};
