import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import {getSortedNewReviews} from "../../utils/utils";

const ReviewList = ({reviews}) => {

  const sortedReviews = getSortedNewReviews(reviews);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((sortedReview) =>
        <Review
          key={sortedReview.id}
          review={sortedReview}
        />
      )}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
