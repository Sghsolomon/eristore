import { selectAllSneaker } from "./HugoSlice";
import HugoCard from "./HugoCard";
import { Row, Col } from "reactstrap";

const HugoList = () => {
  const hugos = selectAllSneaker();
  return (
    <Row className="ms-auto">
      {hugos.map((hugo) => {
        return (
          <Col key={hugo.id} md="2" className="m-5">
            <HugoCard hugo={hugo}></HugoCard>
          </Col>
        );
      })}
    </Row>
  );
};

export default HugoList;
