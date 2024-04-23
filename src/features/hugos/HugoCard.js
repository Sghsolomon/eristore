import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const HugoCard = ({ hugo }) => {
  const { image, name, description, id } = hugo;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default HugoCard;
