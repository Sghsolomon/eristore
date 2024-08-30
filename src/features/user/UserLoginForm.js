import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, selectCurrentUser } from "./userSlice";

import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import defaultAvatar from "../../app/assets/image/login.jpg";
import { ValidateUser } from "../../utils/ValidateUser";

const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const user = {
      id: uuidv4(),
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };

    dispatch(addUser(user));
    setLoginModalOpen(false);
  };

  return (
    <>
      <span className="navbar-text ml-auto me-4">
        {user ? (
          <div style={{ width: "3rem", height: "3rem" }}>
            <img
              src={user.avatar}
              alt="user"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
            <span>{user.username}</span>
          </div>
        ) : (
          <Button
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ color: "white", border: "1px solid white" }}
          >
            <i className="fa fa-sign-in fa-lg" /> Login
          </Button>
        )}
      </span>
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={handleSubmit}
            validate={ValidateUser}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Field
                  id={uuidv4()}
                  name="username"
                  placeholder="Username"
                  className="form-control"
                ></Field>
                <ErrorMessage name="username">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field
                  id={uuidv4()}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                ></Field>
                <ErrorMessage name="password">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button type="submit" color="primary">
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
