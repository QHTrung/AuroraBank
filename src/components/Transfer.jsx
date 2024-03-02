import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';

export default function Transfer() {
  const [amount, setAmount] = useState('');
  const [emailRecipient, setEmailRecipient] = useState('');
  const [user, setUser] = useState(null);
  // get current user
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    const db = getDatabase();
    e.preventDefault();
    // send transaction
    set(ref(db, 'transaction'), {
      amount,
      emailRecipient,
      senderEmail: user.email,
      senderId: user.uid,
    })
      .then(() => {
        console.log('tao db thanh cong!');
      })
      .catch(() => {
        console.log('tao db that bai!');
      });
    // Update balance
    const userRef = ref(db, 'users/' + user.uid + '/balance');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data', data);
    });
    alert('Gửi tiền thành công');
  };

  return (
    <Container className="my-5 w-50">
      <div className="brand-link flex-center">
        <Navbar.Brand href="/" className="nav-brand__container">
          <img alt="Logo Aurora" src="../vite.svg" width="30" height="30" />{' '}
          <span className="bank-name"> Aurora Bank</span>
        </Navbar.Brand>
      </div>
      <h2 className="text-center">Transfer by account</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={emailRecipient}
            onChange={(e) => setEmailRecipient(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Transfer
        </Button>
      </Form>
    </Container>
  );
}
