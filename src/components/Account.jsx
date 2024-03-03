import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Account() {
  const [balance, setBalance] = useState(0);
  // Get current user
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  const db = getDatabase();
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
  return (
    <Container className="my-5 w-50 text-break">
      <Row>
        <h2 className="primary-background white-text p-3 my-4 text-center ">
          ACCOUNT INFORMATION
        </h2>
      </Row>
      <Row className="account-wrapper">
        <h5>Current account</h5>
        <p className="primary-text">{userId}</p>
        <p>Balance: {balance} VND</p>
        <hr />
        <h5>Account holder</h5>
        <p>{auth.currentUser.email}</p>
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
