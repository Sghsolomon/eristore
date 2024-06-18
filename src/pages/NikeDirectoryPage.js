import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";
import { Container } from "reactstrap";

const NikeDirectoryPage = () => {
  let obj = { name: "All" };
  let selectedList = "allGender";
  return (
    <>
      <SubHeader current={obj} />
      <NikeList item={selectedList} />;
    </>
  );
};

export default NikeDirectoryPage;
