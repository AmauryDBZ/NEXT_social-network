import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const UpdateProfile = () => {
  const [input, setInput] = useState([]);

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
  });

  const handleValues = (e) => {
    e.preventDefault();

    const userToken = Cookies.get("token");
    const decoded = jwt_decode(userToken);
    const userId = decoded.id;

    const data = {
      username: input.username,
      email: input.email,
      password: input.password,
    };

    fetch(`https://my-pasteque-space.herokuapp.com/users/${userId}`, {
      method: "put",
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
  };

  return (
    <div>
      <h3>Modifier mes informations : </h3>
      <form className="signInForm">
        <label htmlFor="username">Identifiant</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleInputChange}
          />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          onChange={handleInputChange}
          />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          onChange={handleInputChange}
          />
        <button type="submit" onClick={(e) => handleValues(e)}>
          Enregistrer
        </button>
      </form>
    </div>
  )
}

export default UpdateProfile;
