import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import NewPost from '../components/NewPost';

const Profile = () => {
	const [userToken, setUserToken] = useState(Cookies.get("token"));
	const [profileData, setProfileData] = useState({});

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
					setProfileData(response);
				});
		}
	}, []);

	return (
		<section>
			<h1>Profil de l'utilisateur : {profileData.username} </h1>
			{profileData && (
				<div>
					<p>{profileData.id}</p>
					<p>{profileData.email}</p>
				</div>
			)}
      <NewPost />
		</section>
	);
};

export default Profile;
