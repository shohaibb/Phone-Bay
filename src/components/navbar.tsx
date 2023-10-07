import React, { useState } from 'react';
import { Navbar as NavbarBS, Container, Nav, Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [linkHovered, setLinkHovered] = useState('');

  const linkNormalStyle: React.CSSProperties = {
    transition: 'transform 0.3s',
    fontFamily: "Jazz LET, monospace"  // Add your desired font family here
  };

  const linkHoverStyle: React.CSSProperties = {
    ...linkNormalStyle,
    transform: 'translateY(-5px)',
    textDecoration: 'underline'
  };

  return (
    <NavbarBS className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Row className="w-100">
          <Col xs={4}>
            <Nav className="me-auto">
              <Nav.Link
                to="/"
                as={NavLink}
                style={linkHovered === 'Home' ? linkHoverStyle : linkNormalStyle}
                onMouseEnter={() => setLinkHovered('Home')}
                onMouseLeave={() => setLinkHovered('')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                to="store"
                as={NavLink}
                style={linkHovered === 'Store' ? linkHoverStyle : linkNormalStyle}
                onMouseEnter={() => setLinkHovered('Store')}
                onMouseLeave={() => setLinkHovered('')}
              >
                Store
              </Nav.Link>
              <Nav.Link
                to="about"
                as={NavLink}
                style={linkHovered === 'About' ? linkHoverStyle : linkNormalStyle}
                onMouseEnter={() => setLinkHovered('About')}
                onMouseLeave={() => setLinkHovered('')}
              >
                About
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={4} className="d-flex justify-content-center align-items-center">
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Button
              onClick={openCart}
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative"
              }}
              variant="outline-primary"
              className="rounded-circle"
            >
              {<svg
          viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" height="256" width="256"/><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="80" cy="204" fill="none" r="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="184" cy="204" fill="none" r="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          </svg>}
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)"
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    </NavbarBS>
  );
}
