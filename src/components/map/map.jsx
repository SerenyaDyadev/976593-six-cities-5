import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../utils/property-types";
import {connect} from 'react-redux';
import leaflet from "leaflet";
import {Pins} from "../../utils/const";

class Map extends PureComponent {
  _dataMap() {
    const {mainOffer, offers, cityCoordinates, mapZoom, activeOfferId} = this.props;

    const hoverOffers = offers.slice().filter((item) => item.id === +activeOfferId);
    const otherOffers = offers.slice().filter((item) => item.id !== +activeOfferId);

    const activeOffer = mainOffer ? mainOffer : hoverOffers[0];


    const icon = leaflet.icon({
      iconUrl: Pins.icon,
      iconSize: [27, 39]
    });

    const activeIcon = leaflet.icon({
      iconUrl: Pins.activeIcon,
      iconSize: [27, 39]
    });

    this._map.flyTo(cityCoordinates, mapZoom);

    otherOffers.forEach((offer) =>
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map)
    );

    if (activeOffer) {
      leaflet
        .marker(activeOffer.coordinates, {icon: activeIcon})
        .addTo(this._map);
    }
  }

  componentDidMount() {
    const {cityCoordinates, mapZoom} = this.props;
    this._map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: mapZoom,
      zoomControl: false,
      marker: true
    });

    this._layerGroup = leaflet.layerGroup(this._map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._dataMap();
  }

  componentDidUpdate() {
    this._layerGroup.clearLayers();
    this._dataMap();
  }

  render() {
    const {classMap} = this.props;

    return (
      <section id="map" className={`map ${classMap}`}></section>
    );
  }
}

Map.propTypes = {
  mainOffer: OfferPropTypes,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  classMap: PropTypes.string.isRequired,
  mapZoom: PropTypes.number.isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeOfferId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ACTIONS}) => ({
  activeOfferId: ACTIONS.activeOfferId,
});

export {Map};
export default connect(mapStateToProps)(Map);
