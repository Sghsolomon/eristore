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
            <BreadcrumbItem>
              <Link to={`/${current.path}`}>{current.name}</Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>
            {detail ? current.description : current.name}
          </BreadcrumbItem>
        </Breadcrumb>
        <h2>{current.name}</h2>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;
