import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/"><img src="./images/logo.png" alt="The Hills logo" className="logo" /></Link>
      </h1>
      <div>
        <section>
          <img src="./images/coin.png" alt="Currency icon" className="icon" />
          <p>500</p>
        </section>
        <nav>
          <Link to="/pay1"><img src="./images/pay.png" alt="Payment icon" className="icon" /></Link>
          <Link to="/user"><img src="./images/user.png" alt="User icon" className="icon" /></Link>
        </nav>
      </div>

    </header>
  )
}

export default Header;