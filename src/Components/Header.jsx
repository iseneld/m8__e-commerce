import React from 'react';
import { Link } from 'react-router-dom'

import { BsShopWindow } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai'
import { GiCoins } from 'react-icons/gi'
import { RiQuestionMark } from 'react-icons/ri'

const Header = () => {
  return (
    <header>



      <h1>
        <Link to="/"><img src="./images/logo.png" alt="The Hills logo" className="logo" /></Link>
      </h1>
      <div>
        {/*         <section>
          <img src="./images/coin.png" alt="Currency icon" className="icon" />
          <p>500</p>
        </section> */}

        <nav>
          <Link to="/about">
            <RiQuestionMark size={40} />
          </Link>
          <Link to="/marketplace">
            <BsShopWindow size={40} />
          </Link>

          <Link to="/pay1">
            <GiCoins size={40} />
          </Link>

          <Link to="/user">
            <AiOutlineUser size={40} />
          </Link>
        </nav>
      </div>

    </header>
  )
}

export default Header;