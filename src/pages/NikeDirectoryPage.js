import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";
import { Container } from "reactstrap";

const NikeDirectoryPage = () => {
  let obj = { name: "Nike" };
  return (
    <>
      <SubHeader current={obj} />
      <NikeList />;
    </>
  );
};

export default NikeDirectoryPage;
