import React from 'react';
import { Link  } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/"><img src="./images/logo.png" alt="The Hills logo" /></Link>
      </h1>
      <nav>
        <Link to="/pay1">Pay</Link>
      </nav>
    </header>
  )
}

export default Header;