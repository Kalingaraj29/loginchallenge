import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Loginpage.css'

export default function Loginpage() {
  const [loginUserInput, setloginUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    Eemail: "",
    Epassword: "",
    Everify: "",
  });

  const navigate = useNavigate();
  function handleChange(e) {
    setloginUserInput({ ...loginUserInput, [e.target.name]: e.target.value });
  }
  var hastrue = false;
  function handleSubmit(e) {
    e.preventDefault();
    Object.keys(error).forEach((element) => {
      error[element] = "";
    });
    hastrue = false;
    if (loginUserInput.email === "") {
      error.Eemail = "Please enter the email";
      hastrue = true;
    }
    if (loginUserInput.password === "") {
      error.Epassword = "Please enter the password";
      hastrue = true;
    }

    if (!hastrue) {
      var Credential = getcredentialsfromLS();
      const dVerify = verifyLogin(Credential);
      if (dVerify) {
        navigate('/Welcome')
      } else {
        error.Everify = "Invalid credentials";
      }
     
    }
    setError({ ...error });
  }

  function verifyLogin(Credential) {
    const verify = Credential.filter(
      (ele) =>
        ele.email === loginUserInput.email &&
        ele.password === loginUserInput.password
    );
    if (verify.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function getcredentialsfromLS() {
    var Credentials = JSON.parse(localStorage.getItem("Usercredentials"));
    return Credentials == null ? [] : Credentials;
  }

  return (
    <div>
      <div className="App">
        <div id="wrapper">
          <div className="page-wrapper auth_wrapper">
            <div className="content-area-wrapper">
              <div className="content-wrapper">
                <div className="container">
                  <div className="card products_blc">
                    <div className="card-body">
                      <div className="card_content_wrap text-center">
                        <div className="card_content_wrap text-center">
                          <div className="logo_wrap">
                            <h6>
                              Don’t have an account yet?
                              <Link className="signUpSpan" to="/">
                                {" "}
                                Sign Up
                              </Link>
                            </h6>
                          </div>
                          <form onSubmit={handleSubmit}>
                            <div className="form_wrapper">
                              <div className="mb-4">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label label_modify"
                                >
                                  <span className="mendatary">*</span> Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control input_modify"
                                  id="exampleFormControlInput1"
                                  name="email"
                                  placeholder="demo@demo.com"
                                  value={loginUserInput.email}
                                  onChange={handleChange}
                                />
                                {error?.Eemail && (
                                  <span style={{ color: "red" }}>
                                    {error.Eemail}
                                  </span>
                                )}
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="exampleFormControlInput2"
                                  className="form-label label_modify"
                                >
                                  {" "}
                                  <span className="mendatary">*</span> Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control input_modify"
                                  name="password"
                                  id="exampleFormControlInput2"
                                  placeholder="********"
                                  value={loginUserInput.password}
                                  onChange={handleChange}
                                />
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
                              </div>
                              <div className="mb-0 auth_btn">
                                <button className="theme-btn-primary theme-btn">
                                  Login
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
