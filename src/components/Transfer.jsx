import { getAuth } from 'firebase/auth';
import {
  equalTo,
  get,
  getDatabase,
  onValue,
  orderByChild,
  query,
  ref,
  set,
  update,
} from 'firebase/database';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';

export default function Transfer() {
  const [amount, setAmount] = useState(0);
  const [emailRecipient, setEmailRecipient] = useState('');
  const [balance, setBalance] = useState(0);
  let receiverId = '';
  const db = getDatabase();
  // Get current userId
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  // Get lastest balance
  useEffect(() => {
    const balanceRef = ref(db, 'users/' + userId);
    onValue(
      balanceRef,
      (snapshot) => {
        const balance = snapshot.val().balance;
        setBalance(balance);
      },
      {
        onlyOnce: true,
      },
    );
  });
  // Transfer event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 0 || amount > balance) {
      toast('The amount is not enough to proceed with the transaction', {
        icon: '⚠️',
        duration: 5000,
      });
      return;
    } else {
      // Send and save transaction db
      set(ref(db, 'transaction/' + userId), {
        amount,
        emailRecipient,
        senderEmail: auth.currentUser.email,
        senderId: auth.currentUser.uid,
      })
        .then(() => {
          console.log('Create database successfully!');
        })
        .catch(() => {
          console.log('Create database fail!');
        });
      // Update sender's balance
      const userRef = ref(db, 'users/' + userId);
      onValue(
        userRef,
        (snapshot) => {
          let newBalance = snapshot.val().balance - amount;
          update(userRef, { balance: newBalance })
            .then(() => {
              console.log('Update successfully!');
              setBalance(newBalance);
            })
            .catch(() => {
              console.log('Update fail!');
            });
        },
        {
          onlyOnce: true,
        },
      );
      // Update receiver's balance
      const receiverRef = ref(db, 'users');
      const querySnapshot = query(
        receiverRef,
        orderByChild('email'),
        equalTo(emailRecipient),
      );
      get(querySnapshot)
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childsnap) => {
              let recBalance =
                Number.parseFloat(childsnap.val().balance) +
                Number.parseFloat(amount);
              update(ref(db, 'users/' + childsnap.val().userId), {
                balance: recBalance,
              });
            });
          } else {
            console.log('Not exist!');
          }
        })
        .catch((error) => {
          console.error(error);
        });
      toast.success('Send money successfully!!');
    }
    setAmount(0);
    setEmailRecipient('');
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
      <h3>Current balance: {balance}</h3>
      <h3>Receiver ID: {receiverId}</h3>
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
