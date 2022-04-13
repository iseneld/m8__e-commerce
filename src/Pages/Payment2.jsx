import Option from '../Components/Option';
import "../Styles/payment.css";

const Payment2 = () => {
  return (
    <>
    <section className="shop-wrap">
      <h6>Select Payment{">"} <strong>Payment Information</strong> {">"} Order Confirmation</h6>
      <h1 className="hej">Payment Information</h1>
        <section className="shop2">
          <Option />
           <form>
              <label for="cardtype">Card Type</label>
              <select id="cardtype" name="cardtype"></select>
              <label for="cardnumber">Card Number</label>
              <input type="number" id="cardnumber" name="cardnumber" />
              <div>
                <label for="expirydate">Expiry Date</label>
                <input type="date" id="expirydate" name="expirydate" />
                <label for="cvv">CVV</label>
                <input type="number" id="cvv" name="cvv" />
              </div>
              <label for="cardholder">Card Holder</label>
              <input type="text" id="cardholder" name="cardholder" />
              back
              pay
          </form>
      </section>
    </section>
      
    </>
  )
}

export default Payment2;