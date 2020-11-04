import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import Profile from "./Pages/Profile";
import Navbar from "./components/Navbar";

const App = () => {
	/*
  var token = "eyJ0eXAiO.../// jwt token";
  var decoded = jwt_decode(token);
*/

	return (
		<div className="App">
			<Navbar />
      <Profile />
		</div>
	);
};

export default App;
