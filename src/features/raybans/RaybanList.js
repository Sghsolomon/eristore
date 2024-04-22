import { Row, Col } from "reactstrap";
import RaybanCard from "./RaybanCard";
import { selectAllRayban } from "./RaybanSlice";

const RaybanList = () => {
  const raybans = selectAllRayban();
  return (
    <Row className="ms-5">
      {raybans.map((rayban) => {
        return (
          <Col md="5" className="m-5" key={rayban.id}>
            <RaybanCard rayban={rayban}></RaybanCard>
          </Col>
        );
      })}
    </Row>
  );
};

export default RaybanList;
