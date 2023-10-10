import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Col, Container, Dropdown, FormControl, Image, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';
import logo from './experience-islandsnow-bootstrap-logo.png';
import main from './experience-islandsnow-bootstrap-main.png';

const TopMenu = () => (
  <Navbar expand="sm" bg="light">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link><HouseFill/></Nav.Link>
        <Nav.Link><Search/></Nav.Link>
        <Nav.Link><PersonFill/></Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText className="me-auto">Cart is empty</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Container className="text-center mt-5">
    <Image src={logo} alt="Island Snow Hawaii Logo" className="img-fluid rounded mx-auto d-block py-3"/>
  </Container>
);

const MiddleMenu = () => (
  <Container className="text-center mt-5">
    <Row className="justify-content-center pt-4">
      {['MEN', 'WOMEN', 'KIDS', 'BRANDS', 'SEARCH'].map((item, index) => (
        <Col key={index} xs={1}>
          <Dropdown>
            <Dropdown.Toggle as="div">
              <strong>{item}</strong>
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
      ))}
    </Row>
  </Container>
);

const FullWidthImage = () => (
  <Row className="justify-content-center">
    <Image src={main} className="img-fluid pt-2" alt="Main"/>
  </Row>
);

const FooterMenu = () => (
  <footer>
    <Container>
      <Row className="py-3">
        <Col>
          NAVIGATION
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Video</div>
        </Col>
        <Col>
          MAIN MENU
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          CONNECT
          <hr />
          <div>Sign up for the latest updates</div>
          <InputGroup className="mb-3">
            <FormControl placeholder="Enter Email Address"/>
          </InputGroup>
          <Button varriant="dark">Join</Button>
        </Col>
      </Row>
    </Container>
  </footer>
);

const IslandSnow = () => (
  <Container>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);