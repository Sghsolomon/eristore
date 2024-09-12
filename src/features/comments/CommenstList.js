import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import Comment from "./Comment";

import { selectCommentsByNikeId } from "../nikes/nikeSlice";

const CommentsList = ({ nikeId }) => {
  const comments = useSelector(selectCommentsByNikeId(nikeId));
  const userName = "Solo";

  return (
    <Row className="scrollable-row">
      {comments && comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              comment={comment}
              userName={userName}
            ></Comment>
          );
        })
      ) : (
        <h1>No Comments</h1>
      )}
    </Row>
  );
};

export default CommentsList;
