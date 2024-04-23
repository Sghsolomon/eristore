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
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardBody>
          <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
          </CardImgOverlay>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default NikeCard;
