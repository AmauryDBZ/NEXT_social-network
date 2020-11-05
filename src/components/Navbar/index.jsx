import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.scss";

const Navbar = () => {
	const [isLogged, setIsLogged] = useState(Cookies.get("token"));

	const disconnect = () => {
		Cookies.remove("token");
		document.location.reload();
	};

	return (
		<nav className="navbar">
			<Link to="/" id="homeButton">
				Touche pas au grisbi !
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
					<Link to="/connect">
						<button>Se connecter</button>
					</Link>
					<Link to="/signin">
						<button>S'inscrire</button>
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
