import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Post from "../components/Post/";

const Users = () => {
	const [profileData, setProfileData] = useState();
	const [posts, setPosts] = useState();
	const params = useParams();
	const userToken = Cookies.get("token");

	const fetchPosts = () => {
		fetch(
			`https://my-pasteque-space.herokuapp.com/posts?user.id=${params.profileId}`,
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
			fetch(
				`https://my-pasteque-space.herokuapp.com/users/${params.profileId}`,
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
					setProfileData(response);
					fetchPosts();
				});
		}
	}, []);

	return (
		<div>
			<h1>Page utilisateur : </h1>
			{profileData && (
				<div>
					<div>
						<h2>{profileData.username}</h2>
						<p>{profileData.id}</p>
						<p>{profileData.email}</p>
					</div>
					{posts &&
						posts.map((post) => (
							<Post
								id={post.id}
								text={post.text}
								user={post.user.username}
								userId={post.user.id}
							/>
						))}
				</div>
			)}
		</div>
	);
};

export default Users;
