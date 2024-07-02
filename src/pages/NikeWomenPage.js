import { useSelector } from "react-redux";
import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";
import { Row, Col } from "reactstrap";
import Catagories from "../components/Catagories";

const NikeWomenPage = () => {
  let obj = { name: "Women" };
  const selectedList = "women";
  return (
    <>
      <Catagories></Catagories>
      <SubHeader detail={true} current={obj} />
      <NikeList gender={selectedList} />;
    </>
  );
};

export default NikeWomenPage;
