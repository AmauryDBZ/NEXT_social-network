import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
	let { profileSlug } = useParams();

	return (
		<div>
			<button>Mon profil</button>
		</div>
	);
};

export default Profile;
