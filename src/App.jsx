import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import VerifyOtp from './Pages/VerifyOtp';
import ResetPassword from './Pages/ResetPassword';

import LandingPage from './Pages/LandingPage';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;