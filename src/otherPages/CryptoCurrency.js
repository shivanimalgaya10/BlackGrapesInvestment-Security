import React from 'react';
import './CryptoCurrency.css';
import img1 from '../assets/Images/blue_crpto.jpg'

const CryptoCurrency = () => {
  return (
    <div className="crypto-services-container">
      <div className="crypto-example">
        <img 
          src={img1}
          alt="Cryptocurrency Background" 
          className="crypto-background" 
        />
        <div className="crypto-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Cryptocurrency?
          </h1>
          <p>
            Cryptocurrency is revolutionizing the way we think about money, offering decentralized, secure, and transparent transactions. 
            Embrace the future of finance with our comprehensive cryptocurrency services designed for both new investors and seasoned traders.
            Trade a variety of cryptocurrencies on our user-friendly platform. Access real-time market data, advanced charting tools, and seamless 
            transaction capabilities. Our trading platform offers an optimal experience for buying and selling a wide range of cryptocurrencies,
             allowing you to enhance your trading strategies and maximize your investment potential.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Cryptocurrency</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3 >Decentralization</h3>
            <p>Cryptocurrencies operate on a decentralized network, removing the need for intermediaries like banks.</p>
          </div>
          <div className="benefit-card">
            <h3>Security</h3>
            <p>Transactions are secured by cryptographic algorithms, making them highly secure and tamper-proof.</p>
          </div>
          <div className="benefit-card">
            <h3>Transparency</h3>
            <p>All transactions are recorded on a public ledger, providing complete transparency and accountability.</p>
          </div>
          <div className="benefit-card">
            <h3>Accessibility</h3>
            <p>Cryptocurrencies can be accessed by anyone with an internet connection, promoting financial inclusion.</p>
          </div>
          <div className="benefit-card">
            <h3>Lower Fees</h3>
            <p>Transaction fees for cryptocurrencies are generally lower compared to traditional financial systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CryptoCurrency;
