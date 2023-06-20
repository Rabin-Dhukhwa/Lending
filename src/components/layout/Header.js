import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar
      bg="none"
      expand="md "
      className=" text-light p-3 text-center border"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link ">
            <i class="fa-solid fa-book fa-2xl"></i>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 fs-5 ">
            <Link to="/" className="nav-link" title="Home">
              <i className="fa-solid fa-house fa-lg"></i>
            </Link>
            <Link to="/signin" className="nav-link">
              Sign in
            </Link>
            <Link to="/signup" className="nav-link">
              Sign up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
