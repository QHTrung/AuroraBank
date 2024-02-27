import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import heroImg from '../image/hero.png';
import '../css/hero.css';
function Hero() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} sm={12}>
          <img
            style={{ width: '70%', height: 'auto' }}
            src={heroImg}
            alt="Hero Image"
          />
        </Col>
        <Col md={6} sm={12}>
          <h1 className="hero-heading">Online Banking Pay In Your Hand</h1>
          <p className="hero-desc">
            Aurora Bank is a modern, dynamic and reputable bank, established in
            2003. We provide a comprehensive range of financial products and
            services to individuals, businesses and organizations.
          </p>
          <Button className="hero-btn" variant="primary" size="lg">
            Get started!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
