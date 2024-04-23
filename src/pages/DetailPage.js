import { useParams } from "react-router-dom";
import { selectNikeById } from "../features/nikes/nikeSlice";
import { selectHugoById } from "../features/hugos/HugoSlice";
import { selectRaybanById } from "../features/raybans/RaybanSlice";
import { Row, Container } from "reactstrap";
import DetailCard from "../features/display/DetailCard";
import SubHeader from "../components/SubHeader";

const DetailPage = () => {
  const item = useParams();
  let itemId;
  console.log(item.hasOwnProperty("nikeId"));

  if (item.hasOwnProperty("nikeId")) {
    const { nikeId } = item;
    const nike = selectNikeById(parseInt(nikeId));
    itemId = nike;
  } else if (item.hasOwnProperty("hugoId")) {
    const { hugoId } = item;
    const hugo = selectHugoById(parseInt(hugoId));
    itemId = hugo;
  } else if (item.hasOwnProperty("raybanId")) {
    const { raybanId } = item;
    const rayban = selectRaybanById(parseInt(raybanId));
    itemId = rayban;
  }
  console.log(itemId);
  return (
    <Container>
      <Row>
        <SubHeader current={itemId} detail="true" />
        <DetailCard item={itemId}></DetailCard>
      </Row>
    </Container>
  );
};

export default DetailPage;
