const Validation=(userInput, error) =>{
  if (userInput.email === "") {
    error.Eemail = "The email field is required";
    error.status=true
  }
  if (userInput.password === "") {
    error.Epassword = "The password field is require";
    error.status=true
  }
  if (userInput.confirmpassword === "") {
    error.Econfirmpassword = "Please enter the confirm password";
    error.status=true
  }
  if (userInput.password !== userInput.confirmpassword) {
    error.ReEnter = "Password does not match";
    error.status=true
  }
  if (userInput.password.length <= 8) {
    error.passwordLength =
      "Password length should be greater than 8 characters";
      error.status=true
  }
  return error;
}

const getcredentialsfromLS=()=> {
  var Credentials = JSON.parse(localStorage.getItem("Usercredentials"));
  return Credentials == null ? [] : Credentials;
}


const loginValidation=(loginUserInput,error)=> {
  if (loginUserInput.email === "") {
    error.Eemail = "The email field is required";
    error.status=true
  }
  if (loginUserInput.password === "") {
    error.Epassword = "The password field is required";
    error.status=true
  }
return error
}
function verifyLogin(Credential,loginUserInput) {
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



export default Validation;
export {getcredentialsfromLS,loginValidation,verifyLogin}