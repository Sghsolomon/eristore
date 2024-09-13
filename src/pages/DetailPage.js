import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNikeById } from "../features/nikes/nikeSlice";
import { animated, useSpring } from "react-spring";
import { Row, Col, Container } from "reactstrap";
import DetailCard from "../features/display/DetailCard";
import SubHeader from "../components/SubHeader";
import DesctiptionCard from "../features/display/DescriptionCard";
import CommentsList from "../features/comments/CommenstList";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const [toggle, setToggle] = useState(false);
  //const item = useParams();
  const { nikeId } = useParams();

  useEffect(() => {
    setToggle(true);
  }, [toggle]);

  let itemId;

  itemId = useSelector(selectNikeById(nikeId));

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(0,1)",
    config: { duration: 1000 },
  });

  return (
    <Container>
      <SubHeader current={itemId} detail={true} />
      <animated.div style={animatedStyle}>
        <Row>
          <DetailCard item={itemId}></DetailCard>
          <DesctiptionCard></DesctiptionCard>
        </Row>
      </animated.div>
    </Container>
  );
};

export default DetailPage;

// return (
//   <Container>
//     <SubHeader current={itemId} detail="true" />
//     <animated.div style={animatedStyle}>
//       <Row>
//         <DetailCard item={itemId}></DetailCard>
//         <DesctiptionCard></DesctiptionCard>
//       </Row>
//     </animated.div>
//   </Container>
// );
