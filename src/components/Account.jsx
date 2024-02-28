import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Account() {
  return (
    <Container className="my-5 w-50 text-break">
      <Row>
        <h2 className="primary-background white-text p-3 my-4 text-center ">
          ACCOUNT INFORMATION
        </h2>
      </Row>
      <Row className="account-wrapper">
        <h5>Current account</h5>
        <p className="primary-text">123456789023</p>
        <p>Balance: 5.000.000 VND</p>
        <hr />
        <h5>Account holder</h5>
        <p>QUACH HAI TRUNG</p>
        <hr />
        <h5>Open branch</h5>
        <p>Tan Phu-HCM Branch</p>
      </Row>
      <Link to="/" className="btn btn-outline-primary">
        Back
      </Link>
    </Container>
  );
}
