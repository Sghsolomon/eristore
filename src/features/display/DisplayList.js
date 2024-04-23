import { selectOneNike } from "../nikes/nikeSlice";
import { selectOneHugo } from "../hugos/HugoSlice";
import { selectOneRayban } from "../raybans/RaybanSlice";
import { Row, Col, Container } from "reactstrap";
import Catagories from "../../components/Catagories";
import DisplayCard from "./DisplayCard";

const DisplayList = () => {
  const items = [selectOneNike(), selectOneHugo(), selectOneRayban()];
  console.log(items);
  return (
    <>
      <Catagories></Catagories>
      <Row>
        {items.map((item, i) => {
          return (
            <Col md="3" className="m-5" key={i} onClick={() => {}}>
              <DisplayCard item={item}></DisplayCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayList;
