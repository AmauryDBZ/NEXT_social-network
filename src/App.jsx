import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import SignInForm from './components/SignInForm';

const App = () => {
/*
  var token = "eyJ0eXAiO.../// jwt token";
  var decoded = jwt_decode(token);

  const data = {
    username: "momo",
    email: "momo@yopmail.com",
    password: "azerty"
  };

  fetch('https://my-pasteque-space.herokuapp.com/auth/local/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
*/

  return (
    <div className="App">
      <SignInForm />
    </div>
  );
}

export default App;
