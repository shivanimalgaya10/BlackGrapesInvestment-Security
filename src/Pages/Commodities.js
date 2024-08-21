import React from 'react';
import img1 from '../assets/Images/btrade.png'
import './Commodities.css';

const Commodities = () => {
  return (
    <div className="commodities-services-container">
      <div className="commodities-example">
        <img 
          src={img1}
          alt="Commodities Background" 
          className="commodities-background" 
        />
        <div className="commodities-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Invest in Commodities?
          </h1>
          <p>
            Investing in commodities can offer diversification and a hedge against inflation. Commodities, such as gold, oil, and agricultural products, are tangible assets that can provide stability to your investment portfolio. Our commodities investment services provide you with access to various commodity markets, detailed analysis, and tools to help you make informed investment decisions.
            Explore our platform to discover commodity options, track their performance, and receive expert recommendations to optimize your commodity investment strategy.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Investing in Commodities</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Diversification</h3>
            <p>Commodities offer a way to diversify your investment portfolio beyond traditional stocks and bonds.</p>
          </div>
          <div className="benefit-card">
            <h3>Inflation Hedge</h3>
            <p>Commodities often perform well during periods of inflation, helping to protect your purchasing power.</p>
          </div>
          <div className="benefit-card">
            <h3>Global Exposure</h3>
            <p>Investing in commodities provides exposure to global economic conditions and commodity-specific supply and demand trends.</p>
          </div>
          <div className="benefit-card">
            <h3>Liquidity</h3>
            <p>Many commodity markets offer high liquidity, allowing you to buy and sell positions with ease.</p>
          </div>
          <div className="benefit-card">
            <h3>Growth Potential</h3>
            <p>Certain commodities, like precious metals and energy products, have significant growth potential driven by global trends.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Commodities;

