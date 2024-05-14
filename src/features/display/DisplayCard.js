import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardImgOverlay,
} from "reactstrap";
import { Link } from "react-router-dom";

const DisplayCard = ({ item }) => {
  const { image, id, description, name, path } = item;

  return (
    <Link to={id}>
      <Card className="custom-color">
        <CardImg width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{description}</CardTitle>
          <CardText>{name}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default DisplayCard;
