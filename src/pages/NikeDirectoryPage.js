import Catagories from "../components/Catagories";
import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";
import { Container } from "reactstrap";

const NikeDirectoryPage = () => {
  let obj = { name: "nike" };
  let selectedList = "allGender";
  return (
    <>
      <Catagories></Catagories>
      <SubHeader detail={true} current={obj} />
      <NikeList gender={selectedList} />;
    </>
  );
};

export default NikeDirectoryPage;
