import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DisplayCard = ({ items }) => {
  const { image, id, desctiption, name } = items;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{desctiption}</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
