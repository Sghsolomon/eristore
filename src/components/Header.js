import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import eristore from "../app/assets/image/eristore.jpg";
import UserLoginForm from "../features/user/UserLoginForm";
import UserSignupForm from "../features/user/userSignupForm";
import UserAvatar from "../features/user/UserAvatar";
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated, userLogout } from "../features/user/userSlice";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const auth = useSelector(isAuthenticated);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const userOptions = auth ? (
    <>
      <span className="navbar-text ml-auto">
        <Button
          outline
          onClick={() => dispatch(userLogout())}
          style={{
            color: "white",
            border: "1px solid white",
            margin: "5px",
          }}
        >
          <i className="fa fa-sign-out fa-lg" /> Logout
        </Button>
      </span>
      <div className="mr-3 text-center rounded">
        <UserAvatar />
        <span className="text-info">{user}</span>
      </div>
    </>
  ) : (
    <>
      <UserLoginForm />
      <UserSignupForm />
    </>
  );

  return (
    <>
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={eristore} alt="nucamp logo" className="float-start" />
          <h1 className="mt-1">Eristore</h1>
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
        {userOptions}
      </Navbar>
    </>
  );
}

export default Header;
