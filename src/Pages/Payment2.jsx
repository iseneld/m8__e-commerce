import Option from '../Components/Option';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';

const Payment2 = () => {
  return (
    <>
      <section className="shop-wrap">
        <Breadcrumb />
        <h1 className="hej">Payment Information</h1>
        <section className="shop2">
          <section className="shop2-left">
            <Option />
            <table>
              <tbody>
                <tr>
                  <td>Order</td>
                  <td>1000XTC</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$35</td>
                </tr>
              </tbody>
            </table>
            <footer>
              All prices are inclusive of VAT if applicable. <br />
              XTREME Coins limited, Stockholm
            </footer>
          </section>

          <form className="payment-form">
            <label htmlFor="cardtype">Card Type</label>
            <select id="cardtype" name="cardtype"></select>
            <label htmlFor="cardnumber">Card Number</label>
            <input type="number" id="cardnumber" name="cardnumber" />
            <div>
              <label htmlFor="expirydate">Expiry Date</label>
              <input type="date" id="expirydate" name="expirydate" />
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" name="cvv" />
            </div>
            <label htmlFor="cardholder">Card Holder</label>
            <input type="text" id="cardholder" name="cardholder" />
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Save payment method for later use</label>
            <Link to="/">Back</Link>
            <input type="Submit" id="paybtn" name="paybtn" value="Pay" />
          </form>
        </section>
      </section>

    </>
  )
}

export default Payment2;