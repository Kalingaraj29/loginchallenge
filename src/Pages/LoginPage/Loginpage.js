import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  getcredentialsfromLS,
  loginValidation,
  verifyLogin,
} from "../Validation";
import '../LoginPage/Login.css'

export default function Loginpage() {
  const [loginUserInput, setloginUserInput] = useState({email: "",password: ""});
  const [error, setError] = useState({Eemail: "",Epassword: "",Everify: "",status: false});
  const navigate = useNavigate();

  function handleChange(e) {
    setloginUserInput({ ...loginUserInput, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Object.keys(error).forEach((element) => (error[element] = ""));
    setError({ ...loginValidation(loginUserInput, error) });
    if (!error.status) {
      var Credential = getcredentialsfromLS();
      const dVerify = verifyLogin(Credential, loginUserInput);
      if (dVerify) {
        navigate("/Welcome");
      } else {
        error.Everify = "Invalid credentials";
      }
    }
    setError({ ...error });
  }

  return (
    <>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section" style={{color:'whitesmoke'}}>Login</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              
              <form action="#" className="signin-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="email" value={loginUserInput.email}
                                  onChange={handleChange}/>
                                  {error?.Eemail && (
                                  <span style={{ color: "red" }}>
                                    {error.Eemail}
                                  </span>
                                )}
                </div>
                <div className="form-group">
                  <input id="password-field" type="password" className="form-control" name="password" placeholder="Password" value={loginUserInput.password}
                                  onChange={handleChange}/>
                                  {error?.Epassword && (
                                  <span style={{ color: "red" }}>
                                    {error.Epassword}
                                  </span>
                                )}
                                {error?.Everify && (
                                  <span style={{ color: "red" }}>
                                    {error.Everify}
                                  </span>
                                )}
                  <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group"  style={{background:'green'}}>
                  <button type="submit"  style={{background:'green'}} className="form-control btn submit px-2" onClick={handleSubmit}>Sign In</button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">New User? Sign Up
                      <input type="text"/>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="w-50 text-md-right">
                    <a href="#" style={{color: "#fff"}}>Forgot Password</a>
                  </div>
                </div>
              </form>
              <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
              <div className="social  text-center">
                <a href="#" className="px-2 py-2  rounded" style={{background:"#3498db",opacity:'0.8'}}><span className="ion-logo-facebook mr-2" ></span>Facebook</a>
                <a href="#" className="px-2 py-2  rounded" style={{background:"#3498db",marginTop:'20px'}}><span className="ion-logo-twitter mr-2"></span> Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
  );
}
