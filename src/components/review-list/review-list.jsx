import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewList = ({reviews}) => {

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

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
