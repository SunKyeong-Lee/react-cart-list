import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarComp = () => {
  return (
    <MyNavbar bg="dark" variant="dark">
      <Nav className="me-auto">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Product
        </NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </Nav>
    </MyNavbar>
  );
};

export default NavbarComp;

const MyNavbar = styled(Navbar)`
  padding: 1.5rem 2rem;
  a {
    text-decoration: none;
    color: #e2e2e2;
    font-size: 1.5rem;
    font-weight: 100;
    &:first-child {
      margin-right: 2rem;
    }
    &.active {
      color: white;
      font-weight: 700;
    }
  }
`;
