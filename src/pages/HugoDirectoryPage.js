import SubHeader from "../components/SubHeader";
import HugoList from "../features/hugos/HugoList";

const HugoDirectoryPage = () => {
  let obj = { name: "Hugo" };
  return (
    <>
      <SubHeader current={obj} />
      <HugoList />;
    </>
  );
};

export default HugoDirectoryPage;
