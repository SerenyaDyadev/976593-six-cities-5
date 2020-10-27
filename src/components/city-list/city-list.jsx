import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import City from "../city/city";

const CityList = (props) => {
  const {cities, currentCity, changeCity} = props;

  const onCityClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (

        <City
          key={`${city}-${i}`}
          city={city}
          onCityClick={onCityClick}
          isCurrent={currentCity === city}
        />

      ))}
    </ul>
  );

};

const mapStateToProps = (({city, cities}) => ({
  currentCity: city,
  cities
}));

const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
}));

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
