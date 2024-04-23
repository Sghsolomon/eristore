import DisplayList from "../features/display/DisplayList";
import SubHeader from "..//components/SubHeader";

const HomePage = () => {
  let obj = { name: "Home" };
  return (
    <>
      <SubHeader current={obj}></SubHeader>
      <DisplayList></DisplayList>;
    </>
  );
};

export default HomePage;
