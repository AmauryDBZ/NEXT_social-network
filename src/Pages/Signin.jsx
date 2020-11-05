import React from "react";
import SignInForm from "../components/SignInForm";
import "./index.scss";

const SignIn = () => {
	return (
		<section>
			<h1 className="mainTitle">Page d'inscription</h1>
			<SignInForm />
		</section>
	);
};

export default SignIn;
