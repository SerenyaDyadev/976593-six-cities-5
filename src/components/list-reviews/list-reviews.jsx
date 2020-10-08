import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ListReviews = (props) => {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <Review
          key={review.id}
          review={review}
        />
      )}
    </ul>
  );
};

ListReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ListReviews;
