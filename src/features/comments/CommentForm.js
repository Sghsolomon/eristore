import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormGroup,
} from "reactstrap";
import { isAuthenticated } from "../user/userSlice";
import { selectCommentsByNikeId } from "../nikes/nikeSlice";
import CommentsReview from "./CommentsReview";
import { postComment } from "../nikes/nikeSlice";
import { ToastContainer, toast } from "react-toastify";
import CommentsList from "./CommenstList";

const CommentForm = ({ nikeId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const dispatch = useDispatch();

  const auth = isAuthenticated();
  const comments = useSelector(selectCommentsByNikeId(nikeId));

  const notify = () => toast(<h5>Login please to review</h5>);

  const handleSubmit = (values) => {
    const comment = {
      nikeId: nikeId,
      rating: rating,
      text: values.commentText,
    };
    console.log("comments from second modal", comment);
    dispatch(postComment(comment));
    setModalOpen(false);
    setSecondModalOpen(false);
  };

  return (
    <div className="mt-3">
      {comments && comments.length > 0 ? (
        <button
          outline
          onClick={() => {
            if (auth) {
              setModalOpen(true);
            } else {
              {
                notify();
              }
            }
          }}
        >
          <CommentsReview nikeId={nikeId} />
        </button>
      ) : (
        <div className="mt-3">
          <Button outline onClick={() => setSecondModalOpen(true)}>
            <div>
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </Button>
          <Modal isOpen={secondModalOpen}>
            <ModalHeader toggle={() => setSecondModalOpen(false)}>
              Add Review
            </ModalHeader>
            <ModalBody>
              <Formik
                initialValues={{
                  commentText: "",
                }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <FormGroup>
                    <Label htmlFor="commentText">Comment</Label>
                    <Field
                      name="commentText"
                      as="textarea"
                      rows="12"
                      className="form-control"
                    />
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              </Formik>
            </ModalBody>
          </Modal>
        </div>
      )}

      <ToastContainer />
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Reviews from customers
        </ModalHeader>
        <ModalBody>
          <CommentsList nikeId={nikeId}></CommentsList>
          <div className="mt-3">
            <Button outline onClick={() => setSecondModalOpen(true)}>
              <i className="fa fa-pencil fa-lg" /> Add a review
            </Button>
            <Modal isOpen={secondModalOpen}>
              <ModalHeader toggle={() => setSecondModalOpen(false)}>
                Add Review
              </ModalHeader>
              <ModalBody>
                <div>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <Formik
                  initialValues={{
                    commentText: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <FormGroup>
                      <Label htmlFor="commentText">Comment</Label>
                      <Field
                        name="commentText"
                        as="textarea"
                        rows="12"
                        className="form-control"
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </Form>
                </Formik>
              </ModalBody>
            </Modal>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CommentForm;
