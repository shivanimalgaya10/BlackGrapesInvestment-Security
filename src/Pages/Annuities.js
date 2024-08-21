import React from 'react';
import img1 from '../assets/Images/img14.jpeg'
import './Annuities.css';

const Annuities = () => {
  return (
    <div className="annuities-services-container">
       <img 
          src={img1}
          alt="Annuities Background" 
          className="annuities-background" 
        />
      <div className="annuities-example">
       
        
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'black' }}>
            Why Invest in <br/>Annuities?
          </h1>
          <div className="annuities-text">
          <p>
            Investing in annuities can provide a stable income stream, especially for retirement planning. Annuities are financial products that offer guaranteed payments over a specified period or for life. Our annuities investment services provide you with a variety of annuity options, comprehensive analysis, and tools to help you make informed decisions.
            Explore our platform to discover annuity products, track their performance, and receive expert recommendations to optimize your annuity investment strategy.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Investing in Annuities</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Guaranteed Income</h3>
            <p>Annuities provide a reliable income stream, which can be especially beneficial during retirement.</p>
          </div>
          <div className="benefit-card">
            <h3>Tax-Deferred Growth</h3>
            <p>Investment gains in an annuity grow tax-deferred until you start receiving payments.</p>
          </div>
          <div className="benefit-card">
            <h3>Customizable Options</h3>
            <p>Annuities can be tailored to meet your specific financial goals and risk tolerance.</p>
          </div>
          <div className="benefit-card">
            <h3>Death Benefit</h3>
            <p>Many annuities offer a death benefit that provides your beneficiaries with payments if you pass away.</p>
          </div>
          <div className="benefit-card">
            <h3>Longevity Protection</h3>
            <p>Annuities can protect against the risk of outliving your savings by providing income for life.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Annuities;
