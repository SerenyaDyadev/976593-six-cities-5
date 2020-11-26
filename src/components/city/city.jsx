import React from "react";
import PropTypes from "prop-types";

const City = ({city, isCurrent, handleCityClick}) => {

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isCurrent ? `tabs__item--active` : ``}`}
        href="#"
        onClick={handleCityClick}>
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
  handleCityClick: PropTypes.func.isRequired
};

export default City;
