import React from "react";
import PropTypes from "prop-types";
import {changeCity} from '../../store/action';
import {connect} from 'react-redux';
import City from "../city/city";

const CityList = (props) => {
  const {cities, currentCity, changeCityAction} = props;

  const onCityClick = (evt) => {
    evt.preventDefault();
    changeCityAction(evt.target.textContent);
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

const mapStateToProps = (({CITIES}) => ({
  currentCity: CITIES.city,
  cities: CITIES.cities
}));

const mapDispatchToProps = ((dispatch) => ({
  changeCityAction(city) {
    dispatch(changeCity(city));
  },
}));

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  changeCityAction: PropTypes.func.isRequired,
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
