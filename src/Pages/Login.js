import React from 'react'
import './Login.css'
export default function Login() {
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
		      			<input type="text" className="form-control" placeholder="Email" required/>
		      		</div>
	            <div className="form-group">
	              <input id="password-field" type="password" className="form-control" placeholder="Password" required/>
	              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
	            </div>
	            <div className="form-group"  style={{background:'green'}}>
	            	<button type="submit"  style={{background:'green'}} className="form-control btn submit px-2">Sign In</button>
	            </div>
	            <div className="form-group d-md-flex">
	            	<div className="w-50">
		            	<label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" checked/>
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="#" style={{color: "#fff"}}>Forgot Password</a>
								</div>
	            </div>
	          </form>
	          <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
	          <div className="social d-flex text-center">
	          	<a href="#" className="px-2 py-2 mr-md-1 rounded" style={{background:"#3498db",opacity:'0.8'}}><span className="ion-logo-facebook mr-2" ></span>Facebook</a>
	          	<a href="#" className="px-2 py-2 ml-md-1 rounded" style={{background:"#3498db"}}><span className="ion-logo-twitter mr-2"></span> Twitter</a>
	          </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
    </>
/*<script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>*/

  )
}
