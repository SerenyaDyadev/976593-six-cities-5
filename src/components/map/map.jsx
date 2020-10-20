import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {

  componentDidMount() {
    const {offers} = this.props;

    const CITY_COORDINATES = offers[0].cityCooridinates;

    const coordinatesPlaces = offers.map((offer) => offer.coordinates);

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
    const {classMap} = this.props;

    return (
      <section id="map" className={`map ${classMap}`}></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  classMap: PropTypes.string.isRequired
};

export default Map;
