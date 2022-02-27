//react
import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../static/logos/logo_bn.png";

//markup
const Header = () => {
  return (
    <>
      <Wrapper>
        <Navbar expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand href={withPrefix(`/`)}>
              <img
                alt="Logo Borj-e Kabotar"
                src={Logo}
                width="100"
                className="d-md-inline-block align-top d-none"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href={withPrefix(`/`)}>Home</Nav.Link>
                <NavDropdown title="Project" id="basic-nav-dropdown">
                  <NavDropdown.Item href={withPrefix(`/geo/`)}>
                    Geographical Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item href={withPrefix(`/towers/`)}>
                    Towers
                  </NavDropdown.Item>
                  <NavDropdown.Item href={withPrefix(`/survey/`)}>
                    Survey
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={withPrefix(`/webgis/`)}>WebGIS</Nav.Link>
                <Nav.Link href={withPrefix(`/about/`)}>About</Nav.Link>
                <Nav.Link href={withPrefix(`/pubblication/`)}>
                  Pubblications
                </Nav.Link>
                <Nav.Link href={withPrefix(`/news/`)}>News</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Wrapper>
    </>
  );
};

//style
const Wrapper = styled.section`
  .dropdown-menu {
    background-color: rgba(255, 255, 255);
  }
  .dropdown-item {
    font-family: "Montserrat", sans-serif !important;
    color: rgb(0,0,0);
    &:hover {
      color: rgb(0,0,0);
      background-color: transparent;
      text-decoration: underline!important;
    }
  }
  .navbar-toggler-icon {
    filter: invert(100%);
  }
  .d-md-inline-block {
    filter: invert(100%);
  }
  .nav-link {
    font-family: "Montserrat", sans-serif !important;
    color: rgba(255, 255, 255) !important;
    font-weight: 500;
    font-size: 1rem;
    margin-left: 1rem;
    &:hover {
      color: rgba(255, 255, 255) !important;
      font-weight: 600;
      font-size: 1rem;
      margin-left: 1rem;
    }
  }
  .navbar{
    position: absolute;
  }
`;

export default Header;
