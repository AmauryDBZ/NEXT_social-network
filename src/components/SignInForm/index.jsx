import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import loggingAction from "../../Redux/actions/loggingAction";

const SignInForm = () => {
	const [input, setInput] = useState([]);
	const [redirect, setRedirect] = useState(false);
	const dispatch = useDispatch();

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleValues = (e) => {
		e.preventDefault();

		const data = {
			username: input.username,
			email: input.email,
			password: input.password,
		};

		fetch("https://my-pasteque-space.herokuapp.com/auth/local/register", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				let token = response.jwt;
				Cookies.set("token", token);
				let userData = { user: response.user };
				dispatch(loggingAction(userData));
				setRedirect(true);
			});
	};

	return (
		<div>
			<form className="signInForm">
				<label htmlFor="username">Identifiant</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={handleInputChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="emailInput"
					name="email"
					onChange={handleInputChange}
				/>
				<label htmlFor="password">Mot de passe</label>
				<input
					type="password"
					id="passwordInput"
					name="password"
					onChange={handleInputChange}
				/>
				<button type="submit" onClick={(e) => handleValues(e)}>
					Sign in
				</button>
			</form>
			{redirect && <Redirect to={{ pathname: "/" }} />}
		</div>
	);
};

export default SignInForm;
