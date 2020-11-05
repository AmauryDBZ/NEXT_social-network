import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Profile from "./Pages/Profile";
import Users from "./Pages/Users";
import Home from "./Pages/Home";
import Connect from "./Pages/Connect";
import Signin from "./Pages/Signin";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/connect">
						<Connect />
					</Route>
					<Route path="/signin">
						<Signin />
					</Route>
					<Route path="/profile/me">
						<Profile />
					</Route>
					<Route path="/profile/:profileId">
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
