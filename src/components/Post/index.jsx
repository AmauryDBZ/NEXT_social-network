import React from 'react';

const Post = ({ id, text, user }) => {
  return (
    <div>
      <p>Utilisateur : {user}</p>
      <p>Poste : {text}</p>
      <hr />
    </div>
  )
}

export default Post;
