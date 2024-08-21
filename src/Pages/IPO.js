import React from 'react';
import img1 from '../assets/Images/ipo1.jpg'
import './IPO.css';

const IPO = () => {
  return (
    <div className="ipo-services-container">
      <div className="ipo-example">
        <img 
          src={img1} 
          alt="IPO Background" 
          className="ipo-background" 
        />
        <div className="ipo-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Invest in IPOs?
          </h1>
          <p>
            Investing in Initial Public Offerings (IPOs) provides unique opportunities to buy shares of a company before they become available 
            to the general public. IPOs can offer substantial growth potential as these companies are often in their early stages of expansion. 
            Our IPO services are designed to help you understand the IPO process, assess potential investments, and make informed decisions.
            Utilize our platform to access detailed IPO information, analyze market trends, and evaluate investment risks and rewards. Our tools 
            will guide you through the IPO investment process, making it easier for you to capitalize on early investment opportunities.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Investing in IPOs</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Early Access</h3>
            <p>Invest in companies before they go public, potentially gaining access to high-growth opportunities early on.</p>
          </div>
          <div className="benefit-card">
            <h3>High Return Potential</h3>
            <p>IPOs can offer significant returns if the company's stock price increases after going public.</p>
          </div>
          <div className="benefit-card">
            <h3>Portfolio Diversification</h3>
            <p>Adding IPOs to your investment portfolio can help diversify and spread investment risk across different sectors.</p>
          </div>
          <div className="benefit-card">
            <h3>Market Insight</h3>
            <p>Participating in IPOs provides insights into emerging industries and market trends.</p>
          </div>
          <div className="benefit-card">
            <h3>Company Growth</h3>
            <p>Investing early can align you with a company's growth trajectory and long-term success.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IPO;
