import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const current = { name: "Contact Us" };
  return (
    <Container>
      <SubHeader current={current}></SubHeader>
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Our Address</h5>
          <address>
            1 Oakland Way
            <br />
            Oakland, CA 94609
            <br />
            U.S.A.
          </address>
        </Col>
        <Col>
          <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" /> 1-415-9021-0044
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:eristore@gmail.com"
          >
            <i className="fa fa-envelope-o" /> eristore@gmail.com
          </a>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>Send Us Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
