import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Post from "../components/Post";
import "./index.scss";

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
				});
		}
	}, []);

	return (
		<section>
			<h1 className="mainTitle">Home sweet home</h1>
			{posts ? (
				((<h4>tous les postes disponibles :</h4>),
				posts.map((post) => (
					<Post
						id={post.id}
						text={post.text}
						user={post.user.username}
						userId={post.user.id}
						key={post.id}
					/>
				)))
			) : (
				<p>aucun post n'est disponible ...</p>
			)}
		</section>
	);
};

export default Home;
