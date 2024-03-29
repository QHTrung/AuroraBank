import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Account from './components/Account';
import QrCode from './components/QrCode';
import Transfer from './components/Transfer';
import { Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<Protected />}>
        <Route path="/account" element={<Account />} />
        <Route path="/qrpay" element={<QrCode />} />
        <Route path="/transfer" element={<Transfer />} />
      </Route>
    </Routes>
  );
}

export default App;
