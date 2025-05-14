import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = function () {
  return (
    <Navbar expand="md" className="bg-body-tertiary topbar">
      <Container>
        <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Brosw</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
