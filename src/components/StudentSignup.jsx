import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignup } from "../store/Actions/userActions";
import StudentLogin from "../components/StudentLogin";
import "../../public/stylesheet/signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of the login component

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signupuser = async (event) => {
    event.preventDefault();
    dispatch(asyncsignup(formData));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/student");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <div className="logo">
        <img src="../public/images/logo.webp" alt="" />
      </div>
      <div className="container">
        <div className="signupbox">
          <h1>Sign-up and apply for free</h1>
          <h3>1,50,000+ companies hiring on Internshala</h3>
          <div className="formbox">
            <form>
              <h4>First Name</h4>
              <input
                type="text"
                className="text-2xl font-normal"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="John"
              />
              <h4>Last Name</h4>
              <input
                type="text"
              className="text-2xl font-normal"

                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Doe"
              />
              <h4>Email</h4>
              <input
                type="text"
                name="email"
              className="text-2xl font-normal"

                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
              <h4>Password</h4>
              <input
                type="password"
                name="password"
              className="text-2xl font-normal"

                value={formData.password}
                onChange={handleChange}
                placeholder="Must be at least 6 characters"
              />
              <h4></h4>
              <h5>By signing up, you agree to our Terms and Conditions.</h5>
              <button onClick={signupuser} id="formbtn">
                Sign Up
              </button>
            </form>
            <h4>
              Already registered?{" "}
              <Link to="#" onClick={() => setShowLogin(true)}>
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
      {showLogin && <StudentLogin onClose={handleLoginClose} />}
    </>
  );
}
