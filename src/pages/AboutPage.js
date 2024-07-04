import { Row, Col } from "reactstrap";
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
import { Link } from "react-router-dom";
import estore from "../app/assets/image/estore.jpg";

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

  return (
    <div>
      <Row>
        <p className="ms-5">
          <Link className="link-danger" to="/">
            Eristore
          </Link>{" "}
          &gt; Who We Are
        </p>
        <img src={estore} alt="eirstore" className="img" />
      </Row>
      <Row className="row-content">
        <Col md="4" className="m-5">
          <h1>Who We Are</h1>
          <p>
            Eri Store, Inc. is a leading footwear and apparel retailer that
            unlocks the “inner sneakerhead” in all of us. With approximately 3
            retail stores in 3 states across north America and a licensed store
            presence in the Middle East and Asia, Eri Store, Inc. has a strong
            history of sneaker authority that sparks discovery and ignites the
            power of sneaker culture through its portfolio of brands, including
            Nike, Kids Eri Store, Champs Sports, WSS, and atmos.{" "}
          </p>
        </Col>
        <Col md="6">
          {transitions((springs, item) => {
            return (
              <animated.div style={springs}>
                <DetailCard item={sampleNike[item]}></DetailCard>
              </animated.div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

//http://www.gettyimages.com/detail/1243961434' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block

export default AboutPage;

//{sampleNike && <DetailCard item={sampleNike}></DetailCard>}
