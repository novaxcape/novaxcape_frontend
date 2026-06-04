import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyOtp from "./Pages/VerifyOtp";
import ResetPassword from "./Pages/ResetPassword";
import Supportpage from "./Pages/Supportpage";
import Discover from "./Pages/Discover";
import Centres from "./Pages/Centres";
import About from "./Pages/About";
import LandingPage from "./Pages/LandingPage";
import ProductDetails from "./Pages/ProductDetails";
import Discoverpage from "./Pages/Discoverpage";
import Home from "./components/Home";

import Aboutpage from "./Pages/Aboutpage";

const App = () =>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/h" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/centres" element={<Centres />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<ProductDetails />} />
      
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/l" element={<LandingPage />} />
        <Route path="/" element={<Discoverpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
