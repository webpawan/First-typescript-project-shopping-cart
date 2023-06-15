import React from "react";
import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm  mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          className=""
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              bottom: 0,
              right: 1,
              transform: "translate(25%,25%)",
            }}
          >
            11
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
