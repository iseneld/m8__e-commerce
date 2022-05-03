import Option from '../Components/Option';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';

const Payment3 = () => {
  return (
    <>
      <div className="user-container">
        <section className="shop-wrap">
          <Breadcrumb />
          <h1 className="hej">Order Confirmation</h1>
          <section className="shop2">
            <section className="shop2-left">
              <Option />
              <table>
                <tr>
                  <td>Order</td>
                  <td>1000XTC</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$35</td>
                </tr>
              </table>
              <footer>
                All prices are inclusive of VAT if applicable. <br />
                XTREME Coins limited, Stockholm
              </footer>
            </section>
            <section className="shop3-right">
              <h2>Order Confirmed!</h2>
              <h3>Thank you for your purchase!</h3>
              <p>Order ID 3636879183</p>
              <Link to="/">Go back home</Link>
            </section>
          </section>
        </section>
      </div>

    </>
  )
}

export default Payment3;