import React from "react";
import { useSelector } from "react-redux";
import { selectCommentsByNikeId } from "../nikes/nikeSlice";
import { isAuthenticated } from "../user/userSlice";
import StarRating from "../rating/Rating";

const CommentsReview = ({ nikeId }) => {
  const comments = useSelector(selectCommentsByNikeId(nikeId));
  const auth = useSelector(isAuthenticated);

  let pageContent = <></>;
  let totalRate = 0;
  let arrayLength = comments.length;
  let averageRating = totalRate / arrayLength;

  const reviewObj = { arrayLength, averageRating };
  //comments && comments.length > 0

  if (comments && comments.length > 0) {
    {
      comments.map((comment) => {
        totalRate += comment.rating;
      });
    }

    reviewObj.arrayLength = arrayLength;
    reviewObj.averageRating = totalRate / arrayLength;

    pageContent = <StarRating review={reviewObj} />;
  } else {
    pageContent = <h5>No review</h5>;
  }

  return pageContent;
};

export default CommentsReview;
