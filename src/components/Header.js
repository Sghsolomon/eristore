import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import eristore from "../app/assets/image/eristore.jpg";
import UserLoginForm from "../features/user/UserLoginForm";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={eristore} alt="nucamp logo" className="float-start" />
          <h1 className="mt-1">NuCamp</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/about">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <i className="fa fa-address-card fa-lg" /> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <UserLoginForm></UserLoginForm>
      </Navbar>
    </>
  );
}

export default Header;
