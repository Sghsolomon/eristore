import { Card, CardImg, CardBody, CardText, Col, Container } from "reactstrap";

const NikeFashion = ({ item }) => {
  const { image, description, rating, name } = item;
  return (
    <Container>
      <Col md="5" className="ms-1">
        <Card>
          <CardImg width="100%" src={image} alt={name}></CardImg>
          <CardBody>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};

export default NikeFashion;
