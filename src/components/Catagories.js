import {
  Col,
  Row,
  Button,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

const catagories = [
  {
    name: "NIKE",
    path: "/nike",
  },
  {
    name: "HUGO",
    path: "/hugo",
  },
  {
    name: "RayBan",
    path: "/rayban",
  },
];

const Catagories = () => {
  return (
    <Row>
      <Col md={{ size: 2, offset: 5 }}>
        <h1>Our Collection</h1>
        <UncontrolledDropdown group>
          <Button color="primary">SELECT</Button>
          <DropdownToggle caret color="primary" />
          <DropdownMenu>
            {catagories.map((catagory, index) => {
              return (
                <Link to={catagory.path} key={index}>
                  <DropdownItem>{catagory.name}</DropdownItem>
                </Link>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Col>
    </Row>
  );
};

export default Catagories;
