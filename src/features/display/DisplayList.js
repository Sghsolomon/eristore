import { selectAllNike, selectSampleNike } from "../nikes/nikeSlice";
import { Row, Col } from "reactstrap";
import Catagories from "../../components/Catagories";
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

  // const animatedStyle = useSpring({
  //   opacity: toggle ? 1 : 0,
  //   transform: toggle ? "scale(1,1)" : "scale(0,1)",
  //   config: { duration: 1000 },
  // });

  const transitions = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    //leave: { x: 100, y: 800, opacity: 0 },
    config: { duration: 3000 },
  });

  return (
    <>
      <Catagories></Catagories>
      <Row>
        {transitions((style, item) => {
          return item ? (
            <Col md={{ size: 2, offset: 1 }}>
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

{
  /* <>
      <Catagories></Catagories>
      <Row>
        <Col md={{ size: 3, offset: 4 }} className="bg">
          <animated.div style={animatedStyle}>
            <DisplayCard item={item}></DisplayCard>
          </animated.div>
        </Col>
      </Row>
    </> */
}

{
  /* <Catagories></Catagories>
<Row>
  <Col md={{ size: 3, offset: 4 }} className="bg">
    {transitions((style, item) => {
      console.log(items);
      return item ? (
        <animated.div style={style}>
          <DisplayCard item={item}></DisplayCard>
        </animated.div>
      ) : (
        ""
      );
    })}
  </Col>
</Row> */
}
