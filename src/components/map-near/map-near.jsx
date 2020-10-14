import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const CITY_COORDINATES = [52.38333, 4.9];

class MapNear extends PureComponent {

  componentDidMount() {
    const {nearOffers} = this.props;

    const coordinatesPlaces = nearOffers.map((offer) => offer.coordinates);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(CITY_COORDINATES, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    coordinatesPlaces.forEach((coordinates) =>
      leaflet
        .marker(coordinates, {icon})
        .addTo(map)
    );
  }

  render() {
    return (
      <section id="map" className="property__map map"></section>
    );
  }
}

MapNear.propTypes = {
  nearOffers: PropTypes.array.isRequired,
};

export default MapNear;

