import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Account from './components/Account';
import QrCode from './components/QrCode';
import Transfer from './components/Transfer';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/account" element={<Account />} />
      <Route path="/qrpay" element={<QrCode />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
