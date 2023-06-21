import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="none" expand="md " className="  p-3 text-center border ">
      <Container>
        <Navbar.Brand>
          <Link to="/" className=" ">
            <i className="fa-solid fa-book fa-2xl"></i>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5 fs-5 ">
            <Link to="/" className="" title="Home">
              <i className="fa-solid fa-house fa-lg"></i>
            </Link>
            <Link to="/signin" className="">
              Sign in
            </Link>
            <Link to="/signup" className="">
              Sign up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
