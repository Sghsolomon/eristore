import { selectAllNike, selectSampleNike } from "../nikes/nikeSlice";
import { Row, Col } from "reactstrap";
//import Catagories from "../../components/Catagories";
import DisplayCard from "./DisplayCard";
import { useState } from "react";
import { animated, useTransition, useSpring } from "react-spring";
import { useSelector } from "react-redux";

const DisplayList = () => {
  const [index, setIndex] = useState(0);
  let obj = { name: "Home" };

  const items = useSelector((state) => selectSampleNike(state));
  const allNikes = useSelector((state) => selectAllNike(state));

  console.log(items[0]);

  const transitions = useTransition(items, {
    from: { x: 0, y: 0, opacity: 1, scale: 0 },
    enter: { x: 0, y: 0, opacity: 1, scale: 1 },
    config: { duration: 1500 },
  });

  return (
    <>
      <Row>
        {transitions((style, item) => {
          return item ? (
            <Col md={{ size: 3, offset: 1 }}>
              <animated.div style={style}>
                <DisplayCard item={item}></DisplayCard>
              </animated.div>
            </Col>
          ) : (
            ""
          );
        })}
      </Row>
    </>
  );
};

export default DisplayList;
