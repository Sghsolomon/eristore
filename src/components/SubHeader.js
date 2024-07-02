import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <Row>
      <Col md={{ size: 2, offset: 1 }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          {detail && (
            <BreadcrumbItem active>
              <Link to={`/${current.name}`}>{current.name}</Link>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
        <h2>{current.name}</h2>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;

//  <BreadcrumbItem>
//   <Link to="/nike">All-Gender</Link>
// </BreadcrumbItem>
// <BreadcrumbItem>
//   <Link to="/men">Men</Link>
// </BreadcrumbItem>
// <BreadcrumbItem>
//   <Link to="/women">Women</Link>
// </BreadcrumbItem>
