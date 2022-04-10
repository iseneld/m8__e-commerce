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
      <Link to="/test">Test</Link>
      </nav>
    </header>
  )
}

export default Header;