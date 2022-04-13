import Option from '../Components/Option';
import Breadcrumb from '../Components/Breadcrumb'; 
import "../Styles/payment.css";

const Payment = () => {
  return (
    <>
    <section className="shop-wrap">
      <Breadcrumb />
      <h1 className="hej">Buy XTREME Coins</h1>
        <section className="shop">
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
      </section>
    </section>
      
    </>
  )
}

export default Payment;