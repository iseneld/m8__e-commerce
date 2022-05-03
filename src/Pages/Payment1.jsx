import Option from '../Components/Option';
import Breadcrumb from '../Components/Breadcrumb';

const Payment1 = () => {
  return (
    <>
      <div className="user-container">
        <div className="shop-wrap">
          <Breadcrumb />
          <h1>Buy Hill Coins</h1>
          <section className="shop">
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
          </section>
        </div>
      </div>

    </>
  )
}

export default Payment1;