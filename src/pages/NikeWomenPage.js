import { useSelector } from "react-redux";
import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";
import { Row, Col } from "reactstrap";

const NikeWomenPage = () => {
  let obj = { name: "Nike" };
  const selectedList = "women";
  return (
    <>
      <SubHeader current={obj} />
      <NikeList item={selectedList} />;
    </>
  );
};

export default NikeWomenPage;
