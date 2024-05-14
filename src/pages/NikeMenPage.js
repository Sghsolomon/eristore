import SubHeader from "../components/SubHeader";
import NikeList from "../features/nikes/NikeList";

const NikeMenPage = () => {
  let obj = { name: "Nike" };
  const selectedList = "men";
  console.log(selectedList);
  return (
    <>
      <SubHeader current={obj} />
      <NikeList item={selectedList} />;
    </>
  );
};

export default NikeMenPage;
