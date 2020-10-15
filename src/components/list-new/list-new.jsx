import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

class ListNew extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOpen: null
    };
  }

  render() {
    const {className, offers} = this.props;

    return (
      <div className={`places__list ${className}`}>
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

export default ListNew;

ListNew.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};
