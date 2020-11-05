import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";

const Users = () => {
	const [profileData, setProfileData] = useState();
	const params = useParams();

	useEffect(() => {
		const userToken = Cookies.get("token");
		if (userToken) {
			fetch(`https://my-pasteque-space.herokuapp.com/users/${params.profileId}`, {
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
		<div>
			<h1>Page utilisateur : </h1>
			{profileData && (
				<div>
					<h2>{profileData.username}</h2>
					<p>{profileData.id}</p>
					<p>{profileData.email}</p>
				</div>
			)}
		</div>
	);
};

export default Users;
