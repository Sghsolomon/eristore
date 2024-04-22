import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const RaybanCard = ({ rayban }) => {
  const { image, name, description } = rayban;
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

export default RaybanCard;
