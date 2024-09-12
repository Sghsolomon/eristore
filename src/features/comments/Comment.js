import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import StarRating from "../rating/Rating";
import { Col } from "reactstrap";

const Comment = ({ comment, userName }) => {
  const { text: commentText, rating, author, createdAt: date } = comment;
  const reviewObj = { averageRating: rating };
  console.log("username", userName);
  return (
    <div>
      <i className="fa fa-user mr-3 p-1" aria-hidden="true"></i> {userName}
      <br />
      <StarRating review={reviewObj} />
      <br />
      {commentText}
      <p> Reviewed on {formatDate(date)}</p>
    </div>
  );
};

export default Comment;
