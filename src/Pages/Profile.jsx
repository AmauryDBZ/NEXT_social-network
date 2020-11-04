import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import NewPost from '../components/NewPost';

const Profile = () => {
	const [userToken, setUserToken] = useState(Cookies.get("token"));
	const [userData, setUserData] = useState({});

	useEffect(() => {
		if (userToken) {
			fetch("https://my-pasteque-space.herokuapp.com/users/me", {
				method: "get",
				headers: {
					Authorization: `Bearer ${userToken}`,
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((response) => {
					setUserData(response);
					console.log(userData);
				});
		}
	}, []);

	return (
		<section>
			<h1>Profil de l'utilisateur : {userData.username} </h1>
			{userData && (
				<div>
					<p>{userData.id}</p>
					<p>{userData.email}</p>
				</div>
			)}
      <NewPost />
		</section>
	);
};

export default Profile;
