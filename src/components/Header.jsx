import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/" className="nav-brand__container">
          <img alt="Logo Aurora" src="../vite.svg" width="30" height="30" />{' '}
          <span className="bank-name"> Aurora Bank</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav__features">
            <Link to="/account">Account</Link>
            <Link to="/qrpay">QR pay</Link>
            <Link to="/transfer">Transfer</Link>
          </Nav>
          <Nav className="nav__features--login">
            <Link to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
