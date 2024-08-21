import React from 'react';
import './ForexTrading.css';
import img1 from '../assets/Images/forex.jpg'

const ForexTrading = () => {
  return (
    <div className="forex-services-container">
      <div className="forex-example">
        <img 
          src={img1} 
          alt="Forex Trading Background" 
          className="forex-background" 
        />
        <div className="forex-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Forex Trading?
          </h1>
          <p>
            Forex trading is a global market that offers opportunities for both new and experienced traders to profit from the fluctuations in currency prices. 
            Our forex trading services are designed to provide you with the tools, resources, and strategies needed to navigate the complex world of forex trading.
            Utilize our platform to access real-time market data, advanced charting tools, and seamless transaction capabilities. Our user-friendly interface 
            ensures that you can make informed trading decisions and optimize your trading strategies to maximize your investment potential.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Forex Trading</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>High Liquidity</h3>
            <p>The forex market is the most liquid market in the world, allowing for quick and easy trades at any time.</p>
          </div>
          <div className="benefit-card">
            <h3>24/5 Market</h3>
            <p>The forex market operates 24 hours a day, five days a week, providing ample trading opportunities.</p>
          </div>
          <div className="benefit-card">
            <h3>Leverage</h3>
            <p>Forex trading allows you to use leverage, meaning you can trade larger amounts than your initial investment.</p>
          </div>
          <div className="benefit-card">
            <h3>Diversification</h3>
            <p>Trading various currency pairs can help diversify your investment portfolio and reduce risk.</p>
          </div>
          <div className="benefit-card">
            <h3>Market Analysis Tools</h3>
            <p>Access to advanced market analysis tools can help you make informed trading decisions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForexTrading;
