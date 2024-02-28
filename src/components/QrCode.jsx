import { Container, Navbar } from 'react-bootstrap';
import qrcodeImg from '../image/qrcode.png';
import { Link } from 'react-router-dom';
export default function QrCode() {
  return (
    <Container className="my-5 w-50 text-break">
      <h2 className="text-center">Qr code to transfer</h2>
      <div className="brand-link flex-center">
        <Navbar.Brand href="/" className="nav-brand__container">
          <img alt="Logo Aurora" src="../vite.svg" width="30" height="30" />{' '}
          <span className="bank-name"> Aurora Bank</span>
        </Navbar.Brand>
      </div>
      <div className="text-center">
        <img
          style={{ maxWidth: '70%', height: 'auto' }}
          src={qrcodeImg}
          alt="My QR Code"
        />
      </div>
      <div className="user-info text-center">
        <p className="username primary-color">QUACH HAI TRUNG</p>
        <p className="account-number primary-text">123456789021</p>
        <p className="bank-branch">Aurorabank - Tan Phu Branch</p>
      </div>
      <div className="back text-center">
        <Link to="/" className="btn btn-outline-primary">
          Back
        </Link>
      </div>
    </Container>
  );
}
