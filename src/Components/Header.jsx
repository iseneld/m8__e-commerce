import React from 'react';
import { Link  } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        Xtreme Team
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pay">Pay</Link>
      </nav>
    </header>
  )
}

export default Header;