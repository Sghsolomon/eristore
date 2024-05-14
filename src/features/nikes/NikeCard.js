import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardImgOverlay,
} from "reactstrap";
import { Link } from "react-router-dom";

const NikeCard = ({ nike }) => {
  const { image, name, description, rating, id } = nike;
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

export default NikeCard;
