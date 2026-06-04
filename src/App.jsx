import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from './Pages/SignUp';
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyOtp from "./Pages/VerifyOtp";
import ResetPassword from "./Pages/ResetPassword";
import Supportpage from "./Pages/Supportpage";

import LandingPage from "./Pages/LandingPage";
import ProductDetails from "./Pages/ProductDetails";
import Aboutpage from "./Pages/Aboutpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignUp />} /> */}
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/supportpage" element={<Supportpage />} />
        <Route path="/" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
