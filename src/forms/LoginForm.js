import { useState } from "react";

import "../styles/LoginForm.css";

import { loginUser } from "../api/authApi";

import {
  FaGoogle,
  FaMicrosoft,
  FaArrowRight,
  FaGlobe,
  FaLock,
  FaUser,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";

function LoginForm() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await loginUser(formData);

    console.log(response);

  };

  return (
    <div className="loginPage">

      <div className="loginContainer">

        {/* LANGUAGE */}

        <div className="languageWrapper">

          <button className="languageButton">

            <FaGlobe className="languageIcon" />

            English

          </button>

        </div>

        {/* LOGO */}

        <div className="logoSection">

          <img
  src="/logo.png"
  alt="logo"
  className="topLogo"
/>

          <h1 className="companyTitle">
            E2E TRACKING
          </h1>

          <h3 className="companySubTitle">
            SERVICES
          </h3>

        </div>

        {/* WELCOME */}

        <div className="welcomeSection">

          <h2 className="welcomeTitle">
            Welcome Back!
          </h2>

          <p className="welcomeDescription">
            Login to continue to your account
          </p>

        </div>

        {/* FORM */}

        <form
          className="loginForm"
          onSubmit={handleSubmit}
        >

          {/* USERNAME */}

          <div className="inputGroup">

            <label className="inputLabel">
              Username
            </label>

            <div className="inputWrapper">

              <FaUser className="inputIcon" />

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="inputField"
                onChange={handleChange}
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div className="inputGroup">

            <label className="inputLabel">
              Password
            </label>

            <div className="inputWrapper">

              <FaLock className="inputIcon" />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="inputField"
                onChange={handleChange}
              />

              <FaEyeSlash className="eyeIcon" />

            </div>

          </div>

          {/* OPTIONS */}

          <div className="optionsWrapper">

            <div className="rememberWrapper">

              <input
                type="checkbox"
                className="rememberCheckbox"
              />

              <p className="rememberText">
                Remember me
              </p>

            </div>

            <p className="forgotPassword">
              Forgot Password?
            </p>

          </div>

          {/* BUTTON */}

          <button className="loginButton">

            LOGIN

            <FaArrowRight className="buttonArrow" />

          </button>

        </form>

        {/* DIVIDER */}

        <div className="dividerWrapper">

          <div className="dividerLine"></div>

          <p className="dividerText">
            or sign in with
          </p>

          <div className="dividerLine"></div>

        </div>

        {/* SOCIAL LOGIN */}

        <div className="socialWrapper">

          <button className="socialButton">

            <FaGoogle className="googleIcon" />

          </button>

          <button className="socialButton">

            <FaMicrosoft className="microsoftIcon" />

          </button>

          <button className="socialButton ssoButton">

            <FaShieldAlt className="ssoIcon" />

            SSO

          </button>

        </div>

        {/* SECURITY */}

        <div className="securityContainer">

          <div className="securityIconWrapper">

            <FaShieldAlt className="securityIcon" />

          </div>

          <div className="securityContent">

            <h4 className="securityTitle">
              Your security is our priority
            </h4>

            <p className="securityDescription">
              We use enterprise-grade security to protect your data
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginForm;