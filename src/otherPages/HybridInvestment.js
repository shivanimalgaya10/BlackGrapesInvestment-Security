import React from 'react';
import img1 from '../assets/Images/hybridinvestment.jpg'
import './HybridInvestment.css'; // Ensure this file contains the correct CSS

const HybridInvestment = () => {
  return (
    <div className="hybrid-services-container">
      <div className="hybrid-example">
        <img 
          src={img1}
          alt="Hybrid Investment Background" 
          className="hybrid-background" 
        />
        <div className="hybrid-text">
          <h1>Why Opt for Hybrid Investments?</h1>
          <p>
            Hybrid investments combine various asset classes, such as stocks, bonds, and other securities, to create a balanced and diversified portfolio. 
            This approach aims to provide both growth and stability, catering to a wide range of investment goals and risk appetites. 
            Our hybrid investment services offer tailored solutions to meet your financial objectives, with strategies designed to optimize returns and manage risk effectively.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Hybrid Investments</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Diversification</h3>
            <p>Hybrid investments blend multiple asset classes, helping to diversify your portfolio and reduce overall risk.</p>
          </div>
          <div className="benefit-card">
            <h3>Balanced Risk</h3>
            <p>Combining various investments helps balance risk and return, offering a more stable performance compared to single asset class investments.</p>
          </div>
          <div className="benefit-card">
            <h3>Growth Potential</h3>
            <p>By including growth-oriented assets like stocks, hybrid investments can provide substantial growth potential over time.</p>
          </div>
          <div className="benefit-card">
            <h3>Income Generation</h3>
            <p>Hybrid investments often include income-generating assets such as bonds, providing a steady stream of income along with capital appreciation.</p>
          </div>
          <div className="benefit-card">
            <h3>Flexibility</h3>
            <p>Hybrid investments offer flexibility in asset allocation, allowing you to adjust your portfolio according to market conditions and personal goals.</p>
          </div>
          <div className="benefit-card">
            <h3>Professional Management</h3>
            <p>Many hybrid investments are managed by professionals who actively adjust the asset mix to optimize performance and manage risk.</p>
          </div>
          <div className="benefit-card">
            <h3>Strategic Allocation</h3>
            <p>Hybrid investments are designed to strategically allocate assets across different markets and sectors, enhancing overall portfolio efficiency.</p>
          </div>
          <div className="benefit-card">
            <h3>Customizable Options</h3>
            <p>Hybrid investment products often come with customizable options to fit specific investment horizons and risk tolerances.</p>
          </div>
          <div className="benefit-card">
            <h3>Tax Efficiency</h3>
            <p>Hybrid investments can offer tax-efficient solutions by balancing taxable and tax-advantaged assets within the portfolio.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HybridInvestment;
