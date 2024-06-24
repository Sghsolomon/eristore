import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ContactPage = () => {
  let num = "5";
  return (
    <div>
      <h1>ContactPage</h1>
      <Link to={num}>
        <Button>Click</Button>
      </Link>
    </div>
  );
};

export default ContactPage;
