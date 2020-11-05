import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const NewPost = () => {
  const [newPost, setNewPost] = useState();
  const isLogged = useSelector((state) => state.isLogged);

	const sendNewPost = (e) => {
    e.preventDefault();
    const userToken = Cookies.get("token");
    const decoded = jwt_decode(userToken);
    const data = {
      text: newPost,
      user: decoded.id,
    };
    console.log(data);
		if (userToken) {
			fetch("https://my-pasteque-space.herokuapp.com/posts", {
				method: "post",
				headers: {
					Authorization: `Bearer ${userToken}`,
					"Content-Type": "application/json",
				},
        body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
				});
		}
	}

	return (
    <div>
      <h2>Créer un nouveau post :</h2>
  		<form>
        {isLogged.length}
        <label htmlFor="text">Texte :</label>
        <input
          type="text"
          id="text"
          name="text"
          onChange={(e) => setNewPost(e.currentTarget.value)}
        />
      <button onClick={(e) => sendNewPost(e)}>Publier le poste</button>
      </form>
    </div>
	);
};

export default NewPost;
