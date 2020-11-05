import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.scss";

const Navbar = () => {
	const [isLogged] = useState(Cookies.get("token"));

	const disconnect = () => {
		Cookies.remove("token");
		document.location.reload();
	};

	return (
		<nav className="navbar">
			<Link to="/" id="home">
				Grisbi
			</Link>
			{isLogged ? (
				<div className="buttons">
					<button onClick={() => disconnect()}>Déconnexion</button>
					<Link to="/profile/me">
						<button>Mon Profil</button>
					</Link>
				</div>
			) : (
				<div className="buttons">
					<Link to="/connect">Se connecter</Link>
					<Link to="/signin">S'inscrire</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
