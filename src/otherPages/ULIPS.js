import React from 'react';
import './ULIPS.css';
import img1 from '../assets/Images/ulips.jpg'

const ULIPS= () => {
  return (
    <div className="ulip-services-container">
      <div className="ulip-example">
        <img 
          src={img1}
          alt="ULIP Investment Background" 
          className="ulip-background" 
        />
        <div className="ulip-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why ULIP Investment?
          </h1>
          <p>
            Unit Linked Insurance Plans (ULIPs) are a unique investment option that combines the benefits of insurance and investment in a single plan. 
            By investing in ULIPs, you can secure your financial future while also building wealth over the long term. Our ULIP investment services are designed 
            to help you choose the best plans that align with your financial goals and risk appetite.
            Utilize our platform to explore various ULIP options, track your investments, and optimize your portfolio. Access tools and resources that help you 
            make informed decisions and maximize your returns. Our user-friendly interface ensures that you can manage your investments effectively and efficiently.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of ULIP Investment</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Dual Benefit</h3>
            <p>ULIPs provide the dual benefit of life insurance and investment under a single integrated plan.</p>
          </div>
          <div className="benefit-card">
            <h3>Flexibility</h3>
            <p>ULIPs offer the flexibility to switch between funds based on your financial goals and market conditions.</p>
          </div>
          <div className="benefit-card">
            <h3>Tax Benefits</h3>
            <p>Investing in ULIPs provides tax benefits under Section 80C and Section 10(10D) of the Income Tax Act.</p>
          </div>
          <div className="benefit-card">
            <h3>Transparency</h3>
            <p>ULIPs offer transparency with clear information about charges, fund performance, and portfolio composition.</p>
          </div>
          <div className="benefit-card">
            <h3>Wealth Creation</h3>
            <p>ULIPs help in wealth creation by investing in equity, debt, or a mix of both, as per your risk appetite.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ULIPS;
