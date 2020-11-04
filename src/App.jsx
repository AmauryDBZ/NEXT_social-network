import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";
import Navbar from "./components/Navbar";
import Profile from "./Pages/Profile";
import Users from "./Pages/Users";
import Home from "./Pages/Home";

const App = () => {
	const isLogged = useSelector((state) => state.isLogged);

	const checkAuth = () => {};

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/profile/me">
						<Profile />
					</Route>
					<Route path="/profile/:profileSlug">
						<Users />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
