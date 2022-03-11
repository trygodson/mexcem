import React from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import { colorScheme } from '../../../default';

function Ratings({ ...props }) {
  // rating, size

  const starProps = {
    size: props.size || 25,
    color: colorScheme.faintOrange2,
  };

  const starredProps = {
    color: colorScheme.orange,
  };

  const renderRating = rating => {
    if (rating == 1) {
      return (
        <>
          <StarFill {...starProps} {...starredProps} />
          <Star {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
        </>
      );
    } else if (rating == 2) {
      return (
        <>
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
        </>
      );
    } else if (rating == 3) {
      return (
        <>
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
        </>
      );
    } else if (rating == 4) {
      return (
        <>
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <Star {...starProps} />
        </>
      );
    } else if (rating == 5) {
      return (
        <>
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <StarFill {...starProps} />
          <StarFill {...starProps} />
        </>
      );
    } else {
      return (
        <>
          <Star {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
          <Star {...starProps} />
        </>
      );
    }
  };

  return <div className="row starRow">{renderRating(props.val)}</div>;
}

export default Ratings;
