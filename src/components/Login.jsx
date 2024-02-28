import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Login() {
  return (
    <Container className="my-5 w-50">
      <div className="brand-link flex-center">
        <Navbar.Brand href="/" className="nav-brand__container">
          <img alt="Logo Aurora" src="../vite.svg" width="30" height="30" />{' '}
          <span className="bank-name"> Aurora Bank</span>
        </Navbar.Brand>
      </div>
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
