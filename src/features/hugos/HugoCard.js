import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

const HugoCard = ({ hugo }) => {
  const { image, name, description } = hugo;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default HugoCard;
