import React, { useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  //connecting from backend
  const [state, setState] = useState("Login");

  //to save the formData--
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Api for login signup page
  const signup = async () => {
    console.log("SignUp function executed", formData);
    let responseData;
    await fetch('http://localhost:8000/newuser/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }) 
    .then((response)=>response.json())
    .then((data)=>responseData=data)
    if (responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/login"); //after login user will redirect to home page
    }
    else {
      alert(responseData.errors);
    }
  };

  const login = async () => {
    console.log("Login Function executed", formData);
    let responseData;
    await fetch('http://localhost:8000/newuser/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }) 
    .then((response)=>response.json())
    .then((data)=>responseData=data)
    if (responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/"); //after login user will redirect to home page
    }
    else {
      alert(responseData.errors);
    }
  };


  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">Already have an account?{" "}
            <span onClick={() => {setState("Login")}}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">Create an account
          <span onClick={() => { setState("Sign Up") }}>{" "}Click here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};
