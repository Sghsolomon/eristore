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
import CommentForm from "../comments/CommentForm";

const DesctiptionCard = () => {
  const item = useParams();
  const { nikeId } = item;
  let itemId = useSelector(selectNikeById(nikeId));

  const items = itemId.node;
  const sizes = [9, 9.5, 10, 10.5, 11];
  return (
    <Col md={{ size: 6 }}>
      <Card>
        <CardHeader className="bg-success">
          <h3>{itemId && items.model}</h3>
        </CardHeader>
        <CardBody>
          <dl className="row">
            <dt className="col-4">Brand: {itemId && items.brand}</dt>
            <dd className="col-8">
              <CommentForm nikeId={nikeId}></CommentForm>
            </dd>

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
              <Button className="btn btn-dark">ADD TO CART</Button>
            </dt>
          </dl>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DesctiptionCard;
