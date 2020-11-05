import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import loggingAction from "../../Redux/actions/loggingAction";
import Cookies from "js-cookie";
import "./index.scss";

const ConnectForm = () => {
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
			identifier: input.username,
			password: input.password,
		};
		console.log(data);
		fetch("https://my-pasteque-space.herokuapp.com/auth/local", {
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
				const userData = {
					user: response.user,
				};
				dispatch(loggingAction(userData));
				setRedirect(true);
			});
	};

	return (
		<form>
			<label htmlFor="username">Identifiant</label>
			<input
				type="text"
				id="username"
				name="username"
				autoComplete="username"
				onChange={handleInputChange}
			/>
			<label htmlFor="password">Mot de passe</label>
			<input
				type="password"
				id="passwordInput"
				name="password"
				autoComplete="off"
				onChange={handleInputChange}
			/>
			<button className="submit" type="submit" onClick={(e) => handleValues(e)}>
				Connect
			</button>
			{redirect && <Redirect to={{ pathname: "/" }} />}
		</form>
	);
};

export default ConnectForm;
