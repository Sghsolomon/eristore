import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const { image, id, description, name, path } = item;

  return (
    <Link to={id}>
      <Card
        className="custom-color"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardImg width="100%" src={image} alt={name} />
        {isHovered && (
          <CardImgOverlay tag="h5">Click here for details</CardImgOverlay>
        )}
        <CardBody>
          <CardTitle>{description}</CardTitle>
          <CardText>{name}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default DisplayCard;
