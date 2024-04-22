import DisplayCard from "../features/display/DisplayCard";
import { selectOneNike } from "../features/nikes/nikeSlice";
import { selectOneHugo } from "../features/hugos/HugoSlice";
import { selectOneRayban } from "../features/raybans/RaybanSlice";
import { Row, Col } from "reactstrap";
import Catagories from "../components/Catagories";

const HomePage = () => {
  const items = [selectOneNike(), selectOneHugo(), selectOneRayban()];

  return (
    <>
      <Catagories></Catagories>
      <Row>
        {items.map((item, i) => {
          return (
            <Col
              md="3"
              className="m-5"
              key={i}
              onClick={() => {
                console.log(item.id);
              }}
            >
              <DisplayCard items={item}></DisplayCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
