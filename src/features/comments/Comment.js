import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import StarRating from "../rating/Rating";
import { Col } from "reactstrap";

const Comment = ({ comment }) => {
  const { text: commentText, rating, author, createdAt: date } = comment;
  const reviewObj = { averageRating: rating };
  const user = comment.author.username;
  console.log("comment", comment);
  return (
    <div>
      <i className="fa fa-user mr-3 p-1" aria-hidden="true"></i> {user}
      <br />
      <StarRating review={reviewObj} />
      <br />
      {commentText}
      <p> Reviewed on {formatDate(date)}</p>
    </div>
  );
};

export default Comment;
