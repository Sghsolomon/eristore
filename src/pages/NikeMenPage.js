import Catagories from "../components/Catagories";
import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";

const NikeMenPage = () => {
  let obj = { name: "Men" };
  const selectedList = "men";
  console.log(selectedList);
  return (
    <>
      <Catagories></Catagories>
      <SubHeader detail={true} current={obj} />
      <NikeList gender={selectedList} />;
    </>
  );
};

export default NikeMenPage;
