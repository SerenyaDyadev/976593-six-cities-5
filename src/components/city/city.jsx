import React from "react";
import PropTypes from "prop-types";

const City = ({city, isCurrent, onCityClick}) => {

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isCurrent ? `tabs__item--active` : ``}`}
        href="#"
        onClick={onCityClick}>
        <span>
          {city}
        </span>
      </a>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default City;
