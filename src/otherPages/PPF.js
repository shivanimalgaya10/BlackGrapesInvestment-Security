import React from 'react';
import './PPF.css';
import img1 from '../assets/Images/ppf.jpg'

const PPF = () => {
  return (
    <div className="ppf-services-container">
      <div className="ppf-example">
        <img 
          src={img1}
          alt="PPF Investment Background" 
          className="ppf-background" 
        />
        <div className="ppf-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why PPF Investment?
          </h1>
          <p>
            The Public Provident Fund (PPF) is a government-backed savings scheme that offers a combination of safety, tax benefits, and attractive interest rates. 
            PPF is an ideal investment for long-term financial planning, providing a secure way to build a substantial corpus over time while enjoying tax advantages. 
            By investing in PPF, you benefit from guaranteed returns and the power of compounding, making it a popular choice among conservative investors.
            With our PPF services, you can easily open a PPF account, manage your contributions, and track your growth. Explore our platform to understand the benefits, 
            access tools for planning, and make informed decisions for your financial future.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of PPF Investment</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Government-Backed Security</h3>
            <p>PPF is backed by the Government of India, offering a high level of security and safety for your investments.</p>
          </div>
          <div className="benefit-card">
            <h3>Tax Benefits</h3>
            <p>Contributions to PPF are eligible for tax deductions under Section 80C, and the interest earned is tax-free under Section 10(10D).</p>
          </div>
          <div className="benefit-card">
            <h3>Attractive Interest Rates</h3>
            <p>PPF offers competitive interest rates that are compounded annually, helping your savings grow effectively over time.</p>
          </div>
          <div className="benefit-card">
            <h3>Long-Term Investment</h3>
            <p>PPF has a minimum investment period of 15 years, encouraging disciplined long-term savings and financial planning.</p>
          </div>
          <div className="benefit-card">
            <h3>Loan and Withdrawal Facilities</h3>
            <p>PPF allows partial withdrawals and loans against the balance, providing financial flexibility when needed.</p>
          </div>
          <div className="benefit-card">
            <h3>Compound Growth</h3>
            <p>The power of compound interest ensures that your savings grow significantly over the investment period.</p>
          </div>
          <div className="benefit-card">
            <h3>Easy Account Management</h3>
            <p>Managing your PPF account is simple and convenient, with options to contribute via online banking or physical deposits.</p>
          </div>
          <div className="benefit-card">
            <h3>Loan Repayment</h3>
            <p>Loans taken against your PPF balance can be repaid in easy installments, ensuring flexibility in managing your finances.</p>
          </div>
          <div className="benefit-card">
            <h3>Contribution Flexibility</h3>
            <p>You can make contributions to your PPF account in lump sums or monthly installments, according to your financial capacity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PPF;

