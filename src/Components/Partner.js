import React from 'react'
import './Partner.css'
import img1 from '../assets/Images/angel.png';
import img2 from '../assets/Images/hfm.jpg';
import img3 from '../assets/Images/exness.png';
import img4 from '../assets/Images/binance.jpg';
import img5 from '../assets/Images/coin.png';
import img6 from '../assets/Images/wazirx.jpg';

const Partner = () => {
  return (
    <section className="partners-section">
  <h2 className="trusted-by-heading">Trusted by</h2>
  <p className="authorized-partners-text">We are authorized partners of:</p>
  <div className="partners-logos">
    <a href="https://www.angelone.in/" target="_blank" rel="noopener noreferrer">
      <img src={img1} alt="Angel One"/>
    </a>
    <a href="https://www.hfm.com/" target="_blank" rel="noopener noreferrer">
      <img src={img2} alt="HFM"/>
    </a>
    <a href="https://www.exness.com/" target="_blank" rel="noopener noreferrer">
      <img src={img3} alt="Exness"/>
    </a>
    <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer">
      <img src={img4} alt="Binance"/>
    </a>
    <a href="https://coindcx.com/" target="_blank" rel="noopener noreferrer">
      <img src={img5} alt="CoinDCX"/>
    </a>
    <a href="https://wazirx.com/" target="_blank" rel="noopener noreferrer">
      <img src={img6} alt="WazirX"/>
    </a>
  </div>
</section>
  )
}

export default Partner

