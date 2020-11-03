import React, { useState } from "react";

const SignInForm = () => {
  const [input, setInput] = useState([]);

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleValues = (e) => {
    e.preventDefault();

    const data = {
      username: input.username,
      email: input.email,
      password: input.password
    };

    fetch('https://my-pasteque-space.herokuapp.com/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => console.log(response))
  };

    return (
        <form className="signInForm">
            <label htmlFor="username">Identifiant</label>
            <input type="text" id="username" name="username" onChange={handleInputChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="emailInput" name="email" onChange={handleInputChange} />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="passwordInput" name="password" onChange={handleInputChange} />
            <button type="submit" onClick={(e) => handleValues(e)}>Submit</button>
        </form>
    );
};

export default SignInForm;
