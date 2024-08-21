import React from 'react'
import img1 from '../assets/Images/nps1.jpg'
import p1 from '../assets/Images/nps2.jpg'
import p2 from '../assets/Images/nps3.jpeg'
import p3 from '../assets/Images/p3.jpg'
import p4 from '../assets/Images/p4.jpg'
import './NPS.css';

const NPS = () => {
  return (
    <>
      <header className="nps-trading-header">
        <h1>"Plan for Tomorrow Today: Explore the National Pension System (NPS)"</h1>
      </header>
        <div className="nps-trading-container">
        <div className="nps-example">
        <img 
          src={p2}
          alt="Forex Trading Background" 
          className="forex-background" 
        />
        <div className="nps-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
         
          </h1>
          <p>
          The National Pension System (NPS) is another investment plan backed by the government of India. It falls under the types of investments in India that focuses on saving for the long term, making it the perfect addition to your retirement investment plan. 
          </p>
          <p>
          NPS investments can be diversified across 4 key asset classes – Equities, Government Bonds, Corporate Bonds and alternative investment funds (AIFs). As per current rules NPS investments are eligible for superannuation after the investor attains the age of 60 years. However, NPS investors can continue their investments up to the age of 75 years without superannuation.
        </p>
        </div>
      </div>
      </div>
     
      <section className="nps-trading-intro">
        <h2></h2>
        <p>
         
        </p>
        
      </section>

      <section className="nps-trading-benefits-intro">
        <h2></h2>
      </section>
      <section className="nps-trading-benefits">
        <div className="nps-benefit-card">
        <div className="card-content">
            <div className="text-section">
         <h2>Why Choose NPS?</h2>
         <p>
          NPS offers flexibility and a diversified investment approach, allowing you to allocate funds across equity, corporate bonds, and government securities. With its low-cost structure and portability, NPS is an excellent choice for long-term financial planning and securing a steady income stream for your retirement.
         </p>
       </div>
      <div className="image-section">
        <img src={img1} alt="Why Choose NPS" className="card-image" />
      </div>
    </div>
        </div>

        <div className="nps-benefit-card">
        <div className="card-content">
          <div className="text-section">
          <h2>Explore NPS: Your Path to a Secure Retirement</h2>
        <p>
          The National Pension System (NPS) is a comprehensive government-backed scheme designed to ensure financial stability in retirement. By investing in NPS, you can build a robust retirement corpus through systematic contributions and enjoy the benefits of tax advantages under Section 80C and Section 80CCD(1B).
        </p>
       </div>
       <div className="image-section">
         <img src={p2} alt="Why Choose NPS" className="card-image" />
      </div>
    </div>
        </div>

        {/* <div className="nps-benefit-card">
          <h2>Risk Management</h2>
          <p>
            Options can be used to hedge against potential losses in an investment portfolio. For example, purchasing put options can protect against a decline in the value of underlying assets.
          </p>
        </div>

        <div className="nps-benefit-card">
          <h2>Income Generation</h2>
          <p>
            Options can be utilized to generate additional income through strategies like writing covered calls or selling puts. By collecting premiums from selling options contracts, investors can earn extra income.
          </p>
        </div> */}
      </section>
     
      <section className="nps-trading">
  <div className="nps-trading-card">
    <div className="nps-trading-image">
      <img src={p1} alt="Trading Image"/>
    </div>
    <div className="nps-trading-content">
      <h2>How you can make money: </h2>
      <p>
      As an investor, you lock in the price of a stock with the hope that it will go up in value. However, the risk of an option is that the stock could also lose money.
      So if the stock decreases from its initial price, you lose the money of the contract.Options are an advanced investing technique and retail should exercise caution before using them.
      So if the stock decreases from its initial price, you lose the money of the contract.Options are an advanced investing technique and retail should exercise caution before using them.
      </p>
      <p>
      Another way to generate income through options trading is by employing strategies such as writing covered calls or selling cash-secured puts. In a covered call strategy, an investor holds a long position in an asset and sells call options against it, earning premiums while potentially benefiting from the asset's appreciation. Similarly, selling cash-secured puts involves selling put options while holding sufficient cash to buy the asset if the option is exercised. Both strategies can create a steady stream of income through the collection of option premiums, particularly in stable or sideways markets where significant price movements are less likely.
      </p>
    </div>
  </div>


</section>
    </>
  )
}

export default NPS
