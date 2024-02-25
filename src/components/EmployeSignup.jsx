import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncemployesignup } from "../store/Actions/employeActions";
import { Link, useNavigate } from "react-router-dom";
import "../../public/stylesheet/signup.css";
import "../../public/stylesheet/employesignup.css";
import EmployeLogin from "../components/EmployLogin";

export default function EmployeSignup() {
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
    contact: "",
  });

  const employehandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signupemploye = async (event) => {
    event.preventDefault();
    dispatch(asyncemployesignup(formData));
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/employe");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <div className="logo">
        <img src="../public/images/logo.webp" alt="" />
        <button
          className="text-2xl font-semibold"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </div>
      <div className="employecontainer">
        <div className="employeformbox">
          <form>
            <h4>Official Email Id</h4>
            <input
              type="text"
              name="email"
              className="text-2xl font-normal"
              value={formData.email}
              onChange={employehandleChange}
              placeholder="john@example.com"
            />
            <h4>Password</h4>
            <input
              type="password"
              className="text-2xl font-normal"
              name="password"
              value={formData.password}
              onChange={employehandleChange}
              placeholder="Must be at least 6 characters"
            />
            <h4>First Name</h4>
            <input
              type="text"
              className="text-2xl font-normal"
              name="firstname"
              value={formData.firstname}
              onChange={employehandleChange}
              placeholder="John"
            />
            <h4>Last Name</h4>
            <input
              type="text"
              className="text-2xl font-normal"
              name="lastname"
              value={formData.lastname}
              onChange={employehandleChange}
              placeholder="Doe"
            />
            <h4>Mobile Number</h4>
            <input
              className="text-2xl font-normal"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={employehandleChange}
              placeholder="Doe"
            />
            <h4></h4>
            <h5>By signing up, you agree to our Terms and Conditions.</h5>
            <button onClick={signupemploye} id="employeformbtn">
              Post for Free
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
      <div className="faltuimage"></div>
      {showLogin && <EmployeLogin onClose={handleLoginClose} />}
    </>
  );
}
