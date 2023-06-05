import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Header = ()  => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href='#' data-testid="logo">QA Tools</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <NavDropdown title="💡 Hints 💡" id="nav-dropdown-hints">
            <NavDropdown.Item href="#/codeceptjs">🔥💡 CodeceptJS Hint</NavDropdown.Item>
            <NavDropdown.Item href="#/changeDesktopAppBeUrl">🔥 Changing the BE URL of Desktop App</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="💡 Terms 💡" id="nav-dropdown-terms">
            <NavDropdown.Item href="#/whitelabel">🏷️ White Label</NavDropdown.Item>
            <NavDropdown.Item href="#/ivr">Interactive Voice Response (IVR)</NavDropdown.Item>
            <NavDropdown.Item href="#/blf">Busy Lamp Field (BLF)</NavDropdown.Item>
            <NavDropdown.Item href="#/sip">Session Initiation Protocol (SIP)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}