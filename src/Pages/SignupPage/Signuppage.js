import React, { useReducer, useState } from "react";
import { ReactSVG } from "react-svg";
import "./Signuppage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signuppage() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({email: "",password: "",confirmpassword: "",
  });
  const [error, setError] = useState({Eemail: "",Epassword: "", Econfirmpassword: "",ReEnter: "",passwordLength: "",
  });

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }
  var hastrue = false;

  function handleSubmit(e) {
    e.preventDefault();
    Object.keys(error).forEach((element) => {
      error[element] = "";
    });
    hastrue = false;
    
    if (userInput.email === "") {
      error.Eemail = "Please enter the email";
      hastrue = true;
    }
    if (userInput.password === "") {
      error.Epassword = "Please enter the password";
      hastrue = true;
    }
    if (userInput.confirmpassword === "") {
      error.Econfirmpassword = "Please enter the confirm password";
      hastrue = true;
    }
    if (userInput.password !== userInput.confirmpassword) {
      error.ReEnter = "Password does not match";
      hastrue = true;
    }
    if (userInput.password.length <= 8) {
      error.passwordLength =
        "Password length should be greater than 8 characters";
      hastrue = true;
    }
    setError({ ...error });
    if (!hastrue) {
      var Credential = getcredentialsfromLS();
      localStorage.setItem(
        "Usercredentials",
        JSON.stringify([...Credential, userInput])
      );
      navigate("/login");
    }
  }
  function getcredentialsfromLS() {
    var Credentials = JSON.parse(localStorage.getItem("Usercredentials"));
    return Credentials == null ? [] : Credentials;
  }

  return (
    <>
      <div className="App">
        <div id="wrapper">
          <div className="page-wrapper auth_wrapper">
            <div className="content-area-wrapper">
              <div className="content-wrapper">
                <div className="container">
                  <div className="card products_blc">
                    <div className="card-body">
                      <div className="card_content_wrap text-center"></div>
                      <div className="card_content_wrap text-center">
                        <div className="logo_wrap">
                          <h5>Create an account</h5>
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
                                name="email"
                                placeholder="demo@gmail.com"
                                className="form-control input_modify"
                                id="exampleFormControlInput1"
                                value={userInput.email}
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
                                htmlFor="exampleFormControlInput1"
                                className="form-label label_modify"
                              >
                                {" "}
                                <span className="mendatary">*</span> Password
                              </label>
                              <input
                                type="password"
                                placeholder="*****"
                                name="password"
                                className="form-control input_modify"
                                id="exampleFormControlInput2"
                                value={userInput.password}
                                onChange={handleChange}
                              />
                              {error?.Epassword && (
                                <span style={{ color: "red" }}>
                                  {error.Epassword}
                                </span>
                              )}
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label label_modify"
                              >
                                {" "}
                                <span className="mendatary">*</span>Confirm
                                Password
                              </label>
                              <input
                                type="password"
                                name="confirmpassword"
                                className="form-control input_modify"
                                id="exampleFormControlInput3"
                                placeholder="*****"
                                value={userInput.confirmpassword}
                                onChange={handleChange}
                              />
                              '{" "}
                              {error?.Econfirmpassword && (
                                <span style={{ color: "red" }}>
                                  {error.Econfirmpassword}
                                </span>
                              )}
                              {error?.ReEnter && (
                                <span style={{ color: "red" }}>
                                  {error.ReEnter}
                                </span>
                              )}
                              <br />
                              {error?.passwordLength && (
                                <span style={{ color: "red" }}>
                                  {error.passwordLength}
                                </span>
                              )}
                            </div>
                            <div className="mb-0 auth_btn">
                              <button className="theme-btn-primary theme-btn">
                                Sign Up
                              </button>
                            </div>
                            <div className="already">
                              {" "}
                              <Link to="/login">Already have Account</Link>
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
    </>
  );
}
