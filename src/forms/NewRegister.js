import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/newregister.css";

import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
} from "react-icons/fa";

function NewRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Registration Submitted");
  };

  return (
    <div className="e2eRegisterPage">

      <div className="e2eRegisterContainer">

        <button
          className="e2eBackButton"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
        </button>

        <img
          src="/logo.png"
          alt="logo"
          className="e2eRegisterLogo"
        />

        <h1 className="e2eRegisterTitle">
          Create Account
        </h1>

        <p className="e2eRegisterSubtitle">
          Join E2E Tracking Services
        </p>

        <form
          className="e2eRegisterForm"
          onSubmit={handleSubmit}
        >

          <div className="e2eInputGroup">

            <label>Full Name</label>

            <div className="e2eInputWrapper">
              <FaUser />

              <input
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="e2eInputGroup">

            <label>Email</label>

            <div className="e2eInputWrapper">
              <FaEnvelope />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="e2eInputGroup">

            <label>Password</label>

            <div className="e2eInputWrapper">
              <FaLock />

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="e2eInputGroup">

            <label>Confirm Password</label>

            <div className="e2eInputWrapper">
              <FaLock />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            type="submit"
            className="e2eRegisterSubmitBtn"
          >
            <FaUserPlus />

            Create Account
          </button>

        </form>

        <div className="e2eLoginRedirect">

          Already have an account?

          <span onClick={() => navigate("/")}>
            Login
          </span>

        </div>

      </div>

    </div>
  );
}

export default NewRegister;