import React, {PureComponent} from "react";
import PropTypes from "prop-types";
// import NearCard from "../near-card/near-card";
import ListNew from "../list-new/list-new";

class NearPlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOpen: null
    };
  }

  render() {

    return (
      <ListNew className="near-places__list" {...this.props}/>
    );
  }
}

NearPlacesList.propTypes = {
  nearOffers: PropTypes.array.isRequired
};

export default NearPlacesList;
