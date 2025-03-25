import React, { useState } from 'react'

const FormValidation = () => {
  const [Username,setUsername] = useState("");
  const [email,setemail] = useState("");
  const [Password,setPassword] = useState("");
  const [CPassword,setCPassword] = useState("");

  const [errorUserName, seterrorUserName] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [errorConfrimPassword, seterrorConfrimPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

function validate(e){
  e.preventDefault();
  if(Username.length>8){
    seterrorUserName("");
    setUserColor("green");
  }
  else{
    seterrorUserName("username should be greater than 8")
    setUserColor("red");
  }
  if(email.includes("@gmail")){
    seterrorEmail("");
    setEmailColor("green");
  }
  else{
    seterrorEmail("Enter a valid Email")
    setEmailColor("red");
  }
  if(Password.length>8){
    seterrorPassword("");
    setPasswordColor("green")
  }
  else{
    seterrorPassword("Password should be greater than 8")
    setPasswordColor("red")
  }
  if(Password != "" && Password==CPassword){
    seterrorConfrimPassword("");
    setConfirmPasswordColor("green")
  }
  else{
    seterrorConfrimPassword("Password does not match")
    setConfirmPasswordColor("red")
  }
  console.log("submitted succesfully")
}
  return (
    <>
    <div className="car">
      <div className="card-image"></div>
      <form >
        <h2>Enter Your Name</h2>
        <input type="text" placeholder='Name' value={Username} style={{borderColor:userColor}} onChange={(e)=>setUsername(e.target.value)}  />
        <p className="error">{errorUserName}</p>
        <h2>Enter Your Email</h2>
        <input type="email" placeholder='Email' value={email} style={{borderColor:emailColor}} onChange={(e)=>setemail(e.target.value)} />
        <p className="error">{errorEmail}</p>

          <h2>Enter your Password</h2>

        <input type="password" placeholder='Password' value={Password} style={{borderColor:passwordColor}} onChange={(e)=>setPassword(e.target.value)} />

        <p className="error">{errorPassword}</p>
              <h2>Re-Type Password</h2>
        <input type="password" placeholder='Confirm Password' value={CPassword} style={{borderColor:confirmPasswordColor}} onChange={(e)=>setCPassword(e.target.value)}/>
        <p className="error">{errorConfrimPassword}</p>

        <button className="submit-btn" onClick={validate}>
            Submit
          </button>
      </form>

    </div>
      
    </>
  )
}

export default FormValidation
