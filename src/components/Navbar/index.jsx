import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SignInForm from "../SignInForm";
import ConnectForm from "../ConnectForm";
import "./index.scss";

const Navbar = () => {
	const [whichForm, setWhichForm] = useState("connect");
	const isLogged = Cookies.get("token");
	console.log(isLogged);

	const disconnect = () => {
		Cookies.remove("token");
	};

	return (
		<nav className="navbar">
			{isLogged ? (
				<button onClick={() => disconnect()}>Déconnexion</button>
			) : (
				<div>
					<button onClick={() => setWhichForm("connect")}>Se connecter</button>
					<button onClick={() => setWhichForm("signin")}>S'inscrire</button>
					{whichForm === "connect" ? <ConnectForm /> : <SignInForm />}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
