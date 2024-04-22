import NikeCard from "./NikeCard";
import { selectAllNike } from "./nikeSlice";
import { Col, Row } from "reactstrap";

const NikeList = () => {
  const nikes = selectAllNike();

  return (
    <Row className="ms-auto">
      {nikes.map((nike) => {
        return (
          <Col md="2" className="m-5" key={nike.id}>
            <NikeCard nike={nike} />
          </Col>
        );
      })}
    </Row>
  );
};

export default NikeList;
