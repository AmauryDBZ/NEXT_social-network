import Profile from "./Pages/Profile";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
	const isLogged = useSelector((state) => state.isLogged);

	const checkAuth = () => {};

	return (
		<div className="App">
			<Navbar />
			<Router>
				<Switch>
					<Route path="/profile/:profileSlug">
						<Profile />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
