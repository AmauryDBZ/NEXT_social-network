import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const Post = ({ id, text, user, userId }) => {
	let token = Cookies.get("token");
	let decoded = jwt_decode(token);

	const deletePost = () => {
		fetch(`https://my-pasteque-space.herokuapp.com/posts/${id}`, {
			method: "delete",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<div>
			<Link to={`/profile/${userId}`}>Utilisateur : {user}</Link>
			<p>Poste : {text}</p>
			{decoded.id === userId && (
				<button onClick={() => deletePost()}>Supprimer</button>
			)}
			<hr />
		</div>
	);
};

export default Post;
