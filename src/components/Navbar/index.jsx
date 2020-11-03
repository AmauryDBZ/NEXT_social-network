import React, { useState, useEffect } from "react";
import SignInForm from "../SignInForm";
import ConnectForm from "../ConnectForm";
import "./index.scss";

const Navbar = () => {
	const [whichForm, setWhichForm] = useState("connect");

	return (
		<nav className="navbar">
			<button onClick={() => setWhichForm("connect")}>Se connecter</button>
			<button onClick={() => setWhichForm("signin")}>S'inscrire</button>
			{whichForm === "connect" ? <ConnectForm /> : <SignInForm />}
		</nav>
	);
};

export default Navbar;
