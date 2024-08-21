import React from 'react';
import img1 from '../assets/Images/old.jpg'
import './Retirement.css';

const Retirement = () => {
  return (
    <div className="retirement-plan-services-container">
      <div className="retirement-plan-example">
        <img 
          src={img1}
          alt="Retirement Plan Background" 
          className="retirement-plan-background" 
        />
        <div className="retirement-plan-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Plan for Retirement?
          </h1>
          <p>
            Planning for retirement is essential to ensure a comfortable and financially secure future. A well-structured retirement plan helps you save and invest wisely, aiming to maintain your standard of living once you retire. Our retirement planning services offer guidance and tools to help you create a personalized plan that fits your goals and needs.
            Explore our platform to access resources, track your savings, and receive expert advice on retirement strategies. By starting early and making informed decisions, you can build a robust retirement fund that supports your desired lifestyle.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Planning for Retirement</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Financial Security</h3>
            <p>Establishing a retirement plan ensures you have the financial resources to support yourself during retirement.</p>
          </div>
          <div className="benefit-card">
            <h3>Peace of Mind</h3>
            <p>Knowing you have a plan in place reduces stress and provides confidence about your future financial situation.</p>
          </div>
          <div className="benefit-card">
            <h3>Tax Benefits</h3>
            <p>Many retirement accounts offer tax advantages, such as deferred taxes on contributions and tax-free growth.</p>
          </div>
          <div className="benefit-card">
            <h3>Compound Growth</h3>
            <p>Investing early allows your savings to benefit from compound growth, potentially increasing your retirement fund significantly.</p>
          </div>
          <div className="benefit-card">
            <h3>Flexibility</h3>
            <p>Customizable retirement plans allow you to adjust contributions and investment strategies based on your changing needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Retirement;
