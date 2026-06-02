import React from "react";
import "../Styles/Signup.css";
import Image from "../components/Image";

const SignUp = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">

        <div className="left-panel">
          <Image />

          
        </div>

        <div className="right-panel">
          <h2>Sign Up</h2>

          <form>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
              />
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Input password"
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                type="tel"
                placeholder="Input phone number"
              />
            </div>

            <div className="terms">
              <input type="checkbox" />

              <span>
                I agree to the terms and condition &
                privacy policy
              </span>
            </div>

            <button
              type="submit"
              className="signup-btn"
            >
              Sign Up
            </button>
          </form>

          <div className="divider">
            <span>Or Continue with</span>
          </div>

          <button className="google-btn">
            <img className="google-icon"
        src="/novaxcape/google.png"
        alt="Novaxcape"
      />  Google
          </button>

          <p className="signin-text">
            have an account?
            <a href="/signin"> Sign In</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;