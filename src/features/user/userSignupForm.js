import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateSignupForm } from "../../utils/validateSignupForm";
import { v4 as uuidv4 } from "uuid";
import { userSignup } from "./userSlice";
import { useDispatch } from "react-redux";

const UserSignupForm = () => {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      userSignup({
        firstname: values.firstname,
        lastname: values.lastname,
        username: values.username,
        password: values.password,
      })
    );
    setSignupModalOpen(false);
  };

  return (
    <>
      <span className="navbar-text ml-auto me-4">
        <Button
          outline
          onClick={() => setSignupModalOpen(true)}
          style={{ color: "white", border: "1px solid white" }}
        >
          <i className="fa fa-user-plus fa-lg" /> Signup
        </Button>
      </span>
      <Modal isOpen={signupModalOpen}>
        <ModalHeader toggle={() => setSignupModalOpen(false)}>
          Signup
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validate={validateSignupForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="firstname">Firstname</Label>
                <Field
                  id="firstname"
                  name="firstname"
                  placeholder="Firstname"
                  className="form-control"
                />
                <ErrorMessage name="firstname">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastname">Lastname</Label>
                <Field
                  id="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  className="form-control"
                />
                <ErrorMessage name="lastname">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Field
                  id="username"
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
                  id="password"
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
                Sign Up
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserSignupForm;
