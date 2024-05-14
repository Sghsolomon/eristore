import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";

const DetailCard = ({ item }) => {
  const { image, description, rating, name } = item;

  return (
    <Col md={{ size: 6 }}>
      <Card className="custom-color">
        <CardImg
          width="100%"
          src={image}
          alt={name}
          className="custom-color"
        ></CardImg>
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DetailCard;
