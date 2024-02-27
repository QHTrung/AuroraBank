import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import serviceImg from '../image/service.png';
import cardImg from '../image/card.png';
import onlinedepositImg from '../image/onlinedeposit.png';
import '../css/intro.css';

function Service() {
  const services = [
    {
      backgroundColor: 'blue',
      order: 1,
      image: serviceImg,
      title: 'AURORA ONE digital banking service',
      describe:
        'Open an account in 1 minute - Receive incentives all year long',
    },
    {
      backgroundColor: 'white',
      order: 2,
      image: cardImg,
      title: 'Card Products',
      describe:
        'Experience a modern lifestyle with all the superior amenities from the Aurora Card',
    },
    {
      backgroundColor: 'blue',
      order: 1,
      image: onlinedepositImg,
      title: 'Online Deposit',
      describe:
        'The modern key to a fulfilling life, flexible deposits & higher interest rates at the counter up to 0.5%/year',
    },
  ];
  const serviceItems = services.map((item) => (
    <div
      key={item.title}
      className="intro__content"
      style={{ backgroundColor: `${item.backgroundColor}` }}
    >
      <Container>
        <Row className="intro-content__row">
          <Col md={6} sm={12} style={{ order: `${item.order}` }}>
            <img
              style={{ width: '70%', height: '100%' }}
              alt={item.image}
              src={item.image}
            />
          </Col>
          <Col
            md={6}
            sm={12}
            style={{ order: `${item.order == 2 ? 1 : 2}` }}
            className="intro-content__col"
          >
            <div
              style={{
                color: `${item.backgroundColor == 'blue' ? 'white' : 'black'}`,
              }}
              className="intro-content__item"
            >
              <h3>{item.title}</h3>
              <p>{item.describe}</p>
              <Button variant="primary" size="lg">
                See more!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ));
  return <>{serviceItems}</>;
  // <div className="intro__content" style={{ backgroundColor: 'red' }}>
  //   <Container>
  //     <Row className="intro-content__row">
  //       <Col md={6} sm={12} style={{ order: 2 }}>
  //         <img
  //           style={{ width: '70%', height: '100%' }}
  //           alt={serviceImg}
  //           src={serviceImg}
  //         />
  //       </Col>
  //       <Col
  //         md={6}
  //         sm={12}
  //         style={{ order: 1 }}
  //         className="intro-content__col"
  //       >
  //         <div className="intro-content__item">
  //           <h3>AURORA ONE digital banking service</h3>
  //           <p>
  //             Open an account in 1 minute - Receive incentives all year long
  //           </p>
  //           <Button variant="primary" size="lg">
  //             See more!
  //           </Button>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // </div>
}

export default Service;
