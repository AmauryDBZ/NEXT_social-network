import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, text, user, userId }) => {
  return (
    <div>
      <Link to={`/profile/${userId}`}>Utilisateur : {user}</Link>
      <p>Poste : {text}</p>
      <hr />
    </div>
  )
}

export default Post;
