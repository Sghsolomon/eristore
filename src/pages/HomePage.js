import DisplayList from "../features/display/DisplayList";
import SubHeader from "..//components/SubHeader";
import Catagories from "../components/Catagories";

const HomePage = () => {
  let obj = { name: "Home" };

  return (
    <>
      <Catagories></Catagories>
      <SubHeader current={obj}></SubHeader>
      <DisplayList></DisplayList>;
    </>
  );
};

export default HomePage;
