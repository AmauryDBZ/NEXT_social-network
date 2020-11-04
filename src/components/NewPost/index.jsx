import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const NewPost = () => {
  const [newPost, setNewPost] = useState();
  const isLogged = useSelector((state) => state.isLogged);

  console.log(isLogged);

	const sendNewPost = () => {
    console.log(newPost);
		let userToken = Cookies.get("token");
    console.log(userToken);
    const data = {
      text: newPost,
      user: isLogged.user.id,
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
		<form>
      {isLogged.length}
      <label htmlFor="text">Texte :</label>
      <input
        type="text"
        id="text"
        name="text"
        onChange={(e) => setNewPost(e.currentTarget.value)}
      />
      <button onClick={() => sendNewPost()}>Publier le poste</button>
    </form>
	);
};

export default NewPost;
