import {
  Col,
  Card,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Button,
  CardBody,
  CardHeader,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { selectNikeById } from "../nikes/nikeSlice";
import { useSelector } from "react-redux";

const DesctiptionCard = () => {
  const item = useParams();
  const { nikeId } = item;
  let itemId = useSelector(selectNikeById(nikeId));
  console.log("itemId", itemId);
  const items = itemId.node;
  const sizes = [9, 9.5, 10, 10.5, 11];
  return (
    <Col md={{ size: 5 }}>
      <Card>
        <CardHeader className="bg-success">
          <h3>{itemId && items.model}</h3>
        </CardHeader>
        <CardBody>
          <dl className="row">
            <dt>
              {itemId &&
                `${items.gender[0].toUpperCase() + items.gender.slice(1)}'s`}
            </dt>
            <dt className="col-6">Price: </dt>
            <dd className="col-6">
              {itemId && `$${items.market.state.highestBid.amount}.00`}
            </dd>
            <dt>
              This item ships free <i className="fa fa-truck" />{" "}
            </dt>
            <dt className="col-6">Size:</dt>
            <dd className="col-6">
              Please Select{" "}
              <UncontrolledDropdown group>
                <Button className="bg-primary ms-1">SIZE</Button>
                <DropdownToggle caret color="primary" />
                <DropdownMenu>
                  {sizes.map((size, i) => {
                    return <DropdownItem key={i}>{size}</DropdownItem>;
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </dd>
            <dt>
              <Button color="dark">ADD TO CART</Button>
            </dt>
          </dl>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DesctiptionCard;

/*<Col md={{ size: 4 }}>
<table className="table table-borderless">
  <thead>
    <tr>
      <th colspan="5" scope="col">
        {itemId && items.model}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="5" scope="row">
        {itemId &&
          `${items.gender[0].toUpperCase() + items.gender.slice(1)}'s`}
      </th>
    </tr>
    <tr>
      <th colspan="5" scope="row">
        {itemId && `$${items.market.state.highestBid.amount}.00`}
      </th>
    </tr>
    <tr>
      <th colSpan="5" scope="row">
        This items ships free <i className="fa fa-truck" />
      </th>
    </tr>
    <tr>
      <th scope="row">Size:</th>
      <td>Please select</td>
      <td>
        <UncontrolledDropdown group>
          <Button color="primary">SIZE</Button>
          <DropdownToggle caret color="primary" />
          <DropdownMenu>
            {sizes.map((size) => {
              return <DropdownItem>{size}</DropdownItem>;
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
    <tr>
      <td>
        <Button color="dark">ADD TO CART</Button>
      </td>
    </tr>
  </tbody>
</table>
</Col>*/
