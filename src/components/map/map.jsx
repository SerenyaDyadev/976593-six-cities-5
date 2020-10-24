import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {pins} from "../../const";

class Map extends PureComponent {

  _dataMap() {
    const {offers, hoverOfferId} = this.props;

    const hoverOffers = offers.slice().filter((item) => item.id === +hoverOfferId);
    const otherOffers = offers.slice().filter((item) => item.id !== +hoverOfferId);

    const icon = leaflet.icon({
      iconUrl: pins.icon,
      iconSize: [30, 30]
    });

    const hoverIcon = leaflet.icon({
      iconUrl: pins.hoverIcon,
      iconSize: [30, 30]
    });

    otherOffers.forEach((offer) =>
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map)
    );

    if (hoverOffers.length) {
      leaflet
        .marker(hoverOffers[0].coordinates, {icon: hoverIcon})
        .addTo(this._map);
    }
  }

  componentDidMount() {
    const CITY_COORDINATES = this.props.offers[0].cityCooridinates;
    const zoom = 12;

    this._map = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(CITY_COORDINATES, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._dataMap();
  }

  componentDidUpdate() {
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
  offers: PropTypes.array.isRequired,
  classMap: PropTypes.string.isRequired,
  hoverOfferId: PropTypes.string.isRequired,
};

export default Map;

