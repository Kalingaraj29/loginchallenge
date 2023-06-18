import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  getcredentialsfromLS,
  loginValidation,
  verifyLogin,
} from "../Validation";
import "../LoginPage/Login.css";
import amazonlogo from "../../assets/amazon.jpg";
import rectangle from "../../assets/Rectangle 4.png";
import google from '../../assets/Group 9.png';
import facebook from '../../assets/Rectangle 17.png';
import danger from '../../assets/Group 2.png'
export default function Loginpage() {
  const [loginUserInput, setloginUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    Eemail: "",
    Epassword: "",
    Everify: "",
    status: false,
  });
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
      <div className="container">
        <div className="containerbox">
          <div className="formbox">
            <div className="header">
              <img src={amazonlogo} alt="" />
            </div>
            <div className="imageheader">
              <div className="heading">
                <p>Login</p>
              </div>
              <div className="imge">
                <img src={rectangle} />
              </div>
            </div>
            <div className="formcontent">
              <div className="login-box">
                <div className="col-lg-10 mb-5 mb-lg-0">
                  <form
                    id="contactForm"
                    name="contactForm"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="fname"
                          placeholder="Email"
                          onChange={handleChange}
                        />
                      </div>
                      {error && error.Eemail && <p style={{
                          textAlign: 'left',
                           FontFace: 'normal normal normal 13px/19px Myriad Pro',
                           color: '#EE2D6E',
                           fontSize:'11px',
                        }}><img src={danger} style={{
                          width:'13px'
                        }
                        }/>{error.Eemail}</p>}
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="password"
                          id="email"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                         {error && error.Epassword &&
                        <p style={{
                          textAlign: 'left',
                           FontFace: 'normal normal normal 13px/19px Myriad Pro',
                           color: '#EE2D6E',
                           fontSize:'12px'
                        }}><img src={danger}style={{
                          width:'12px'
                        }
                        }/>
                          {error.Epassword}</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-button">
                        <button>Sign In</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footercontent">
              <div className="forgot">
                <p>Forgot password?</p>
              </div>
              <div className="newuser">
              <p>New User? Sign Up</p>
              </div>
            </div>
            <div className="dovor">
              <p>or</p>
            </div>
            <div className="footerbutto">
              <div className="google_button">
                 <button>
                  <img src={google}/>
                  <span>
                  CONTINUE WITH GOOGLE
                  </span>
                 </button>
              </div>
              <div className="facebook_button">
                 <button>
                  <img src={facebook}/>
                  <span>
                  CONTINUE WITH FACEBOOK
                  </span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
