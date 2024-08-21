import React from 'react';
import './CitizenSaving.css';

const CitizenSaving = () => {
  return (
    <div className="saving-services-container">
      <div className="saving-example">
        <img 
          src="https://t3.ftcdn.net/jpg/05/22/88/20/240_F_522882080_EHkPfzfk171drm9o19GMv5ZRkEb8QWOX.jpg" 
          alt="Saving Background" 
          className="saving-background" 
        />
        <div className="saving-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
            Why Citizen Saving?
          </h1>
          <p>
            Citizen saving is crucial for financial stability and independence. By saving wisely, you can secure your future and ensure that 
            you are prepared for any financial challenges that come your way. Our citizen saving services are designed to help you develop 
            effective saving habits and strategies tailored to your financial goals.
            Utilize our platform to manage your savings efficiently. Access tools and resources that help you track your savings progress, 
            set financial goals, and optimize your saving strategies. Our platform offers an easy-to-use interface that ensures you make the 
            most out of your savings potential.
          </p>
        </div>
      </div>

      <section className="benefits">
        <h2 className="benefits-title">Benefits of Citizen Saving</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Financial Security</h3>
            <p>Building a savings buffer can provide financial security and peace of mind in times of need.</p>
          </div>
          <div className="benefit-card">
            <h3>Goal Achievement</h3>
            <p>Saving helps you reach your financial goals, whether it's buying a home, starting a business, or traveling the world.</p>
          </div>
          <div className="benefit-card">
            <h3>Emergency Fund</h3>
            <p>Having an emergency fund ensures you're prepared for unexpected expenses or financial emergencies.</p>
          </div>
          <div className="benefit-card">
            <h3>Wealth Building</h3>
            <p>Consistent saving is a key component of wealth building and long-term financial health.</p>
          </div>
          <div className="benefit-card">
            <h3>Lower Debt</h3>
            <p>Saving can help you avoid accumulating high-interest debt by covering expenses without borrowing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CitizenSaving;
