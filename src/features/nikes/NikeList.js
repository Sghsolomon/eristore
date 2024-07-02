import { useSelector } from "react-redux";
import NikeCard from "./NikeCard";
import { selectAllNike } from "./nikeSlice";
import { Col, Row } from "reactstrap";

const NikeList = ({ gender }) => {
  const items = useSelector(selectAllNike);
  let womens = items.filter((item) => {
    return item.node.gender === gender;
  });
  let mens = items.filter((item) => {
    return item.node.gender === gender;
  });

  if (gender === "allGender") {
    return (
      <Row xs="5" className="mb-5">
        {items.map((nike) => {
          return (
            <Col className="bg-light border ms-5 m-5 mb-5">
              <NikeCard nike={nike} />
            </Col>
          );
        })}
      </Row>
    );
  } else if (gender === "men") {
    return (
      <Row xs="5" className="mb-5">
        {mens.map((nike) => {
          return (
            <Col className="bg-light border ms-5 m-5 mb-5 ">
              <NikeCard nike={nike} />
            </Col>
          );
        })}
      </Row>
    );
  } else if (gender === "women") {
    return (
      <Row xs="5" className="mb-5">
        {womens.map((nike) => {
          return (
            <Col className="bg-light border ms-5 m-5 mb-5 ">
              <NikeCard nike={nike} />
            </Col>
          );
        })}
      </Row>
    );
  }
};

export default NikeList;
