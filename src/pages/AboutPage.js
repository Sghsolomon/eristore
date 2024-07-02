import { Row, Col, Container } from "reactstrap";
import { selectSampleNike } from "../features/nikes/nikeSlice";
import { useSelector } from "react-redux";
import DetailCard from "../features/display/DetailCard";
import {
  useTransition,
  animated,
  useSpringRef,
  useSpring,
} from "@react-spring/web";
import { useLayoutEffect, useState } from "react";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const springApi = useSpringRef();
  const sampleNike = useSelector(selectSampleNike);
  console.log("active Index", activeIndex);

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    },
    enter: {
      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    },
    leave: {
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(
          activeIndex === sampleNike.length - 1 ? 0 : activeIndex + 1
        );
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 1500,
    },
    delay: 1000,
    ref: springApi,
  });

  const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 11000,
    },
    loop: true,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  // useEffect(() => {
  //   const increment = () =>
  //     setIndex((index) => (index + 1) % sampleNike.length);

  //   const intervalId = setInterval(increment, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // const transitions = useTransition(sampleNike[index], {
  //   from: { opacity: 0, transform: "translate3d(-100%, 0,0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%, 0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(100%, 0,0)" },
  // from: { x: -500, y: 0, opacity: 0, transform: "scale(0)" },
  // enter: { x: 0, y: 0, opacity: 1, transform: "scale(1)" },
  // leave: { x: 500, y: 0, opacity: 1, transform: "scale(0)" },
  //   exitBeforeEnter: true,
  //   config: { duration: 2000 },
  // });

  return (
    <Container>
      <Row className="row-content">
        <Col md="5" className="ms-4">
          <h1>About Us</h1>
          <p>
            Eri Store, Inc. is a leading footwear and apparel retailer that
            unlocks the “inner sneakerhead” in all of us. With approximately
            2,500 retail stores in 26 countries across North America, Europe,
            Asia, Australia, and New Zealand, and a licensed store presence in
            the Middle East and Asia, Eri Store, Inc. has a strong history of
            sneaker authority that sparks discovery and ignites the power of
            sneaker culture through its portfolio of brands, including Nike,
            Kids Eri Store, Champs Sports, WSS, and atmos.{" "}
          </p>
        </Col>
        <Col md="6" className="ms-4">
          {transitions((springs, item) => {
            return (
              <animated.div style={springs}>
                <DetailCard item={sampleNike[item]}></DetailCard>
              </animated.div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

//{sampleNike && <DetailCard item={sampleNike}></DetailCard>}
