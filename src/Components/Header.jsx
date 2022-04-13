import React from 'react';
import { Link  } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/"><img src="./images/logo.png" alt="The Hills logo" /></Link>
      </h1>
      <div>
        <section>
          <img src="./images/coin.png" alt="Currency icon" class="balance-icon"/>
          <p>500</p>
        </section>
        <nav>
          <Link to="/pay1">Pay</Link>
        </nav>
      </div>
      
    </header>
  )
}

export default Header;