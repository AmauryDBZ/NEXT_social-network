import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Post from '../components/Post';

const Home = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		const userToken = Cookies.get("token");
		if (userToken) {
			fetch("https://my-pasteque-space.herokuapp.com/posts", {
				method: "get",
				headers: {
					Authorization: `Bearer ${userToken}`,
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((response) => {
					setPosts(response);
					console.log(posts);
				});
		}
	}, []);

	return (
		<section>
			<h1>Home sweet home</h1>
			{posts && posts.map((post) => (
				<Post
					id={post.id}
					text={post.text}
					user={post.user.username}
				/>
			))}
		</section>
	);
};

export default Home;
