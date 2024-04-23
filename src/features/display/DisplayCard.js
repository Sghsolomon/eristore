import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const DisplayCard = ({ item }) => {
  const { image, id, desctiption, name, path } = item;

  return (
    <Link to={path}>
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{desctiption}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default DisplayCard;
