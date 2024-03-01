import { Col, Container, Row } from 'react-bootstrap';
import '../css/footer.css';

function Footer() {
  return (
    <Container className="footer-container">
      <Row>
        <Col xl={3}>
          <div className="logo-footer">
            <a href="/home" className="logo-footer__container">
              <img alt="Logo Aurora" src="../vite.svg" width="30" height="30" />{' '}
              <span className="bank-name"> Aurora Bank</span>
            </a>
          </div>
        </Col>
        <Col xl={9} className="copyright-footer">
          <span>© 2024 Aurora Joint Stock Commercial Bank</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
