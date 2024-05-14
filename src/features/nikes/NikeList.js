import { useSelector } from "react-redux";
import NikeCard from "./NikeCard";
import { selectAllNike } from "./nikeSlice";
import { Col, Row } from "reactstrap";

const NikeList = ({ item }) => {
  const items = useSelector(selectAllNike);
  let womens = items.filter((item) => {
    return item.node.gender === "women";
  });
  let mens = items.filter((item) => {
    return item.node.gender === "men";
  });

  if (item === "allGender") {
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
  } else if (item === "men") {
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
  } else if (item === "women") {
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
