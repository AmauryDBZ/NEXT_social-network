import React, { useState } from 'react';

const ConnectForm = () => {
  const [input, setInput] = useState([]);

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleValues = (e) => {
    e.preventDefault();

    const data = {
      username: input.username,
      password: input.password
    };

    fetch('https://my-pasteque-space.herokuapp.com/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => console.log(response))
  };

  return (
    <div>
      <h3>Connect form :</h3>
      <form>
        <label htmlFor="username">Identifiant</label>
        <input type="text" id="username" name="username" onChange={handleInputChange} />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="passwordInput" name="password" onChange={handleInputChange} />
        <button type="submit" onClick={(e) => handleValues(e)}>Connect</button>
      </form>
    </div>
  )
}

export default ConnectForm;
