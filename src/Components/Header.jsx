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
          <img src="./images/coin.png" alt="Currency icon" class="icon"/>
          <p>500</p>
        </section>
        <nav>
          <Link to="/pay1"><img src="./images/pay.png" alt="Payment icon" class="icon" /></Link>
          <img src="./images/user.png" alt="User icon" class="icon"/>
        </nav>
      </div>
      
    </header>
  )
}

export default Header;