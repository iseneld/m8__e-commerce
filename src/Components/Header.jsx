import React from 'react';
import { Link  } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/test">Test</Link>
        <Link to="/">Home</Link>
        Header Test
      </h1>
    </header>
  )
}

export default Header;