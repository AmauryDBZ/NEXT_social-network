import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import NewPost from '../components/NewPost';
import UpdateProfile from '../components/UpdateProfile';

const Profile = () => {
	const [userToken, setUserToken] = useState(Cookies.get("token"));
	const [profileData, setProfileData] = useState({});
	const [toggleUpdate, setToggleUpdate] = useState(false);

	const showUpdateForm = (e) => {
		e.preventDefault();
		setToggleUpdate(!toggleUpdate);
	}

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
			<button onClick={(e) => showUpdateForm(e)}>Mettre à jour mon profil</button>
			{toggleUpdate && (
				<div>
					<hr />
					<UpdateProfile />
				</div>
			)}
			<hr />
      <NewPost />
		</section>
	);
};

export default Profile;
