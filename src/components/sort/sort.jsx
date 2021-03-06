import React from "react";
import PropTypes from "prop-types";
import {updateSort} from '../../store/action';
import {connect} from 'react-redux';
import {SortType} from "../../utils/const";


const Sort = ({currentSort, updateSortAction, openSort}) => {

  const onSortClick = (evt) => {
    evt.preventDefault();
    updateSortAction(evt.target.textContent);
  };

  return (
    <ul onClick={onSortClick} className={`places__options places__options--custom ${openSort ? `places__options--opened` : ``}`}>
      <li
        className={`places__option ${SortType.POPULAR === currentSort ? `places__option--active` : ``}`}
        tabIndex="0">
        {SortType.POPULAR}
      </li>
      <li
        className={`places__option ${SortType.PRICE_LOW_TO_HIGH === currentSort ? `places__option--active` : ``}`}
        tabIndex="0">
        {SortType.PRICE_LOW_TO_HIGH}
      </li>
      <li
        className={`places__option ${SortType.PRICE_HIGH_TO_LOW === currentSort ? `places__option--active` : ``}`}
        tabIndex="0">
        {SortType.PRICE_HIGH_TO_LOW}
      </li>
      <li
        className={`places__option ${SortType.RATING === currentSort ? `places__option--active` : ``}`}
        tabIndex="0">
        {SortType.RATING}
      </li>
    </ul>
  );
};


Sort.propTypes = {
  updateSortAction: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  openSort: PropTypes.bool.isRequired,
};

const mapStateToProps = (({ACTIONS}) => ({
  currentSort: ACTIONS.currentSort,
  openSort: ACTIONS.openSort
}));

const mapDispatchToProps = ((dispatch) => ({
  updateSortAction(sort) {
    dispatch(updateSort(sort));
  },
}));

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
