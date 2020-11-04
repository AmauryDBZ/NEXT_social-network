import React, { useState, useEffect } from "react";
import SignInForm from "../SignInForm";
import ConnectForm from "../ConnectForm";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import loggingAction from '../../Redux/actions/loggingAction';

const Navbar = () => {
	const [whichForm, setWhichForm] = useState("connect");
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const disconnect = () => {
    Cookies.remove("token");
    const userData = {
      id: 0,
      email: "",
      token: "",
    };
    dispatch(loggingAction(userData));
  }

	return (
		<nav className="navbar">
      {isLogged.token != '' ? (
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
