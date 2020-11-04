import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import SignInForm from "../SignInForm";
import ConnectForm from "../ConnectForm";
import "./index.scss";

const Navbar = () => {
	const [whichForm, setWhichForm] = useState("connect");
	const isLogged = Cookies.get("token");

	const disconnect = () => {
		Cookies.remove("token");
		document.location.reload();
	};

	return (
		<nav className="navbar">
			{isLogged ? (
				<div className="loggedInButtons">
					<button onClick={() => disconnect()}>Déconnexion</button>
					<Link to="/profile/me">
						<button>Mon Profil</button>
					</Link>
				</div>
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
