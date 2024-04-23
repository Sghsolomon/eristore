import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";

const DetailCard = ({ item }) => {
  const { image, description, rating, name } = item;
  return (
    <Col md="5" className="ms-1">
      <Card>
        <CardImg width="100%" src={image} alt={name}></CardImg>
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DetailCard;
