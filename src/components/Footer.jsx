import { Container } from 'react-bootstrap';
import '../css/footer.css';

function Footer() {
  return (
    <Container className="footer-container">
      <div className="logo-footer">
        <a href="/home" className="logo-footer__container">
          <img alt="Logo Aurora" src="../vite.svg" width="30" height="30" />{' '}
          <span className="bank-name"> Aurora Bank</span>
        </a>
      </div>
      <div className="copyright-footer">
        © 2024 Aurora Joint Stock Commercial Bank
      </div>
    </Container>
  );
}

export default Footer;
