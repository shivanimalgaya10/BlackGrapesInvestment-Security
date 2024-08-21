import React from 'react';
import img1 from '../assets/Images/mutual-fund.jpg'
import './MutualFund.css';

const MutualFund = () => {
  return (
    <div className="mutual-fund-services-container">
      <div className="mutual-fund-example">
        <img 
          src={img1}
          alt="Mutual Fund Background" 
          className="mutual-fund-background" 
        />
        <div className="mutual-fund-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Invest in Mutual Funds?
          </h1>
          <p>
            Mutual funds offer a diverse investment option that pools money from many investors to purchase a broad portfolio of stocks, bonds, or other securities. Investing in mutual funds allows you to benefit from professional management and diversification, which can help mitigate risks and enhance potential returns. Our mutual fund services provide you with tools and resources to select the best funds tailored to your financial goals and risk tolerance.
            Explore our platform to analyze mutual fund options, track performance, and receive expert recommendations to optimize your investment strategy.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Investing in Mutual Funds</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Diversification</h3>
            <p>Mutual funds invest in a wide range of securities, reducing individual investment risk through diversification.</p>
          </div>
          <div className="benefit-card">
            <h3>Professional Management</h3>
            <p>Funds are managed by professional portfolio managers who make investment decisions based on extensive research.</p>
          </div>
          <div className="benefit-card">
            <h3>Accessibility</h3>
            <p>Mutual funds allow you to invest with relatively small amounts of money and access a broad market.</p>
          </div>
          <div className="benefit-card">
            <h3>Liquidity</h3>
            <p>Investors can buy or sell mutual fund shares on any business day, providing liquidity and flexibility.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Mutual funds often offer lower transaction costs compared to buying individual securities, benefiting from economies of scale.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MutualFund;
