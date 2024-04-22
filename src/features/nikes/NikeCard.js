import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardImgOverlay,
} from "reactstrap";

const NikeCard = ({ nike }) => {
  const { image, name, description, rating } = nike;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardBody>
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default NikeCard;
