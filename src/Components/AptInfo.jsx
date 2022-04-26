import coin2png from '../Styles/css-content/coin2.png';
function AptInfo() {
  return (
    <div className="AptInfo-frame">
      <section className="about-apt">
                    <div className="about-apt-title">
                      <h2>Apartment 102</h2>
                      <div className='apt-price-tag'>
                        <img src={coin2png} alt="HCoin" className='HC-icon' />
                        <p>309 HC</p>
                      </div>
                    </div>
                    <div className="about-apt-desc">
                      <p>Low tier apartment <br />Alleyway view</p>
                      <button className="sell-btn">Sell</button>
                    </div>
        </section>
    </div>
  )
}

export default AptInfo
