import React from 'react';
import img1 from '../assets/Images/etf1.jpg'
import './ExchangeTraded.css';

const ExchangeTraded = () => {
  return (
    <div className="etf-services-container">
      <div className="etf-example">
        <img 
          src={img1}
          alt="Exchange-Traded Fund Background" 
          className="etf-background" 
        />
        <div className="etf-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Invest in ETFs?
          </h1>
          <p>
            Exchange-Traded Funds (ETFs) are a versatile investment option that combine the benefits of mutual funds and individual stocks. ETFs are traded on stock exchanges and offer liquidity, diversification, and cost-efficiency. By investing in ETFs, you gain access to a broad range of assets, including stocks, bonds, and commodities, often with lower expense ratios than mutual funds. Our ETF services provide comprehensive tools and insights to help you choose the right ETFs based on your investment goals and risk profile.
            Discover our platform to analyze ETF options, track their performance, and receive expert recommendations to enhance your investment strategy.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Investing in ETFs</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Liquidity</h3>
            <p>ETFs can be bought and sold throughout the trading day on stock exchanges, providing high liquidity.</p>
          </div>
          <div className="benefit-card">
            <h3>Diversification</h3>
            <p>ETFs typically hold a diverse range of assets, reducing individual investment risk.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>ETFs usually have lower expense ratios compared to mutual funds, making them cost-effective.</p>
          </div>
          <div className="benefit-card">
            <h3>Transparency</h3>
            <p>Most ETFs disclose their holdings daily, offering transparency into what you are investing in.</p>
          </div>
          <div className="benefit-card">
            <h3>Flexibility</h3>
            <p>ETFs provide exposure to various asset classes and investment strategies, offering flexibility in building your portfolio.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExchangeTraded;

