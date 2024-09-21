import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import InputMask from "react-input-mask";
import { postOrder } from "../user/userSlice";

const OrderForm = ({ nikeId, shoeSize, clearSize }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "United Kingdom",
    "Australia",
  ];

  const handleSubmit = (values) => {
    const order = {
      nikeId: nikeId,
      shoeSize: shoeSize,
      country: values.country.toLowerCase(),
      fullName: values.fullName.toLowerCase(),
      phoneNum: values.phoneNum.toLowerCase(),
      address: values.address.toLowerCase(),
      city: values.city.toLowerCase(),
      state: values.state.toLowerCase(),
      zipCode: values.zipCode.toLowerCase(),
    };
    console.log(order);
    clearSize(shoeSize);
    dispatch(postOrder(order));
    setModalOpen(false);
  };

  return (
    <div className="mt-3">
      <Button
        className="btn btn-warning"
        outline
        onClick={() => {
          if (!shoeSize) {
            //notify();
            clearSize(shoeSize);
          } else {
            setModalOpen(true);
          }
        }}
      >
        Buy Now
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Shipping address
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              country: undefined,
              fullName: "",
              phoneNum: "",
              address: "",
              city: "",
              state: "",
              zipCode: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="country"></Label>
                  <Field as="select" name="country" className="form-control">
                    <option value="">Select a Country</option>
                    {countries.map((country, index) => {
                      return (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      );
                    })}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label className="bold-label" htmlFor="fullName">
                    Full name (First and Last name)
                  </Label>
                  <Field
                    name="fullName"
                    placeholder="First and Last name"
                    className="form-control"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="bold-label" htmlFor="phoneNum">
                    Phone Number
                  </Label>
                  <Field className="form-control" name="phoneNum">
                    {({ field }) => (
                      <InputMask
                        className="form-control"
                        mask="(999) 999-9999"
                        value={field.value}
                        onChange={(e) =>
                          setFieldValue("phoneNum", e.target.value)
                        }
                      >
                        {(inputProps) => (
                          <input
                            {...inputProps}
                            type="text"
                            placeholder="(000) 000-0000"
                          />
                        )}
                      </InputMask>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label className="bold-label" htmlFor="address">
                    Address
                  </Label>
                  <Field
                    name="address"
                    placeholder="Apt, Suite, Unit, Building"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="bold-label" htmlFor="city">
                    City
                  </Label>
                  <Field
                    name="city"
                    placeholder="City"
                    className="form-control"
                  />
                </FormGroup>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="bold-label" htmlFor="state">
                        State
                      </Label>
                      <Field
                        name="state"
                        placeholder="State"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="bold-label" htmlFor="zipCode">
                        Zip Code
                      </Label>
                      <Field
                        name="zipCode"
                        placeholder="Zip Code"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default OrderForm;
