import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import loggingAction from "../../Redux/actions/loggingAction";
import Cookies from "js-cookie";

const ConnectForm = () => {
	const [input, setInput] = useState([]);
	const dispatch = useDispatch();
	const isLogged = useSelector((state) => state.isLogged);

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
			});
	};

	return (
		<div>
			<h3>Connect form :</h3>
			<form>
				<label htmlFor="username">Identifiant</label>
				<input
					type="text"
					id="username"
					name="username"
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
					Connect
				</button>
			</form>
		</div>
	);
};

export default ConnectForm;
