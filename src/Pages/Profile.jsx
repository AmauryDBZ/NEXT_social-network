import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import NewPost from "../components/NewPost";
import UpdateProfile from "../components/UpdateProfile";
import Post from "../components/Post/";

const Profile = () => {
	const [profileData, setProfileData] = useState({});
	const [toggleUpdate, setToggleUpdate] = useState(false);
	const [posts, setPosts] = useState();
	const userToken = Cookies.get("token");
	const decoded = jwt_decode(userToken);

	const showUpdateForm = (e) => {
		e.preventDefault();
		setToggleUpdate(!toggleUpdate);
	};

	const fetchPosts = () => {
		fetch(
			`https://my-pasteque-space.herokuapp.com/posts?user.id=${decoded.id}`,
			{
				method: "get",
				headers: {
					Authorization: `Bearer ${userToken}`,
					"Content-Type": "application/json",
				},
			},
		)
			.then((response) => response.json())
			.then((response) => {
				setPosts(response);
				console.log(response);
			});
	};

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
					fetchPosts();
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
			<button onClick={(e) => showUpdateForm(e)}>
				Mettre à jour mon profil
			</button>
			{toggleUpdate && (
				<div>
					<hr />
					<UpdateProfile />
				</div>
			)}
			<hr />
			<NewPost />
			<hr />
			{posts &&
				posts.map((post) => (
					<Post
						id={post.id}
						text={post.text}
						user={post.user.username}
						userId={post.user.id}
					/>
				))}
		</section>
	);
};

export default Profile;
