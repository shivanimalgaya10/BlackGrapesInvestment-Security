import React from 'react';
import img1 from  '../assets/Images/cd.jpeg'
import './DepositCertificate.css'; // Ensure this file contains the correct CSS

const DepositCertificate = () => {
  return (
    <div className="cd-services-container">
      <div className="cd-example">
        <img 
          src={img1} 
          alt="Certificates of Deposit Background" 
          className="cd-background" 
        />
        <div className="cd-text">
          <h1>Why Choose Certificates of Deposit?</h1>
          <p>
            Certificates of Deposit (CDs) are a low-risk investment option offered by banks and credit unions. They provide a fixed 
            interest rate for a specified term, making them a predictable and secure choice for investors seeking stable returns. 
            With our CD services, you can explore various options tailored to your financial goals and make informed decisions for 
            growing your savings safely.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Certificates of Deposit</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Guaranteed Returns</h3>
            <p>CDs offer fixed interest rates, ensuring predictable and guaranteed returns over the investment term.</p>
          </div>
          <div className="benefit-card">
            <h3>Low Risk</h3>
            <p>CDs are a low-risk investment option, as they are insured by the FDIC up to the legal limit, protecting your principal.</p>
          </div>
          <div className="benefit-card">
            <h3>Flexible Terms</h3>
            <p>Choose from a variety of term lengths, ranging from a few months to several years, to match your financial needs.</p>
          </div>
          <div className="benefit-card">
            <h3>Higher Rates</h3>
            <p>CDs generally offer higher interest rates compared to regular savings accounts, helping your money grow faster.</p>
          </div>
          <div className="benefit-card">
            <h3>Structured Savings</h3>
            <p>CDs help you plan your savings by providing a structured investment with a clear maturity date and return schedule.</p>
          </div>
          <div className="benefit-card">
            <h3>Easy to Manage</h3>
            <p>CDs are straightforward to open and manage, with minimal maintenance required during the investment term.</p>
          </div>
          <div className="benefit-card">
            <h3>No Market Risk</h3>
            <p>Unlike stocks or mutual funds, CDs are not subject to market fluctuations, providing a stable and risk-free investment.</p>
          </div>
          <div className="benefit-card">
            <h3>Penalty-Free Options</h3>
            <p>Some CDs offer early withdrawal options without penalties, giving you more flexibility with your funds.</p>
          </div>
          <div className="benefit-card">
            <h3>Tax Benefits</h3>
            <p>Interest earned on CDs may have tax advantages depending on your specific financial situation and account type.</p>
          </div>
        </div>
      </section>
    </div>
  );
}



export default DepositCertificate
