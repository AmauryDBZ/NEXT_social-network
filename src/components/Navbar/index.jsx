import React, { useState, useEffect } from 'react';

const Navbar = () =>{
  return (
    <nav>
      <SignInForm />
      <ConnectForm />
    </nav>
  )
}

export default Navbar;
