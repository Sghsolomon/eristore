import RaybanList from "../features/raybans/RaybanList";
import SubHeader from "../components/SubHeader";

const RaybanDirectoryPage = () => {
  let obj = { name: "RayBan" };
  return (
    <>
      <SubHeader current={obj} />
      <RaybanList />;
    </>
  );
};

export default RaybanDirectoryPage;
