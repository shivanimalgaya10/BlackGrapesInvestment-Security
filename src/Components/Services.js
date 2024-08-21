import React,{useState} from 'react'
import './Services.css'




const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    { title: "Stocks", description: "Stocks are key to investment portfolios, offering ownership in companies and potential for growth. Our platform provides real-time data and expert insights to help you make informed stock investment decisions." },
    { title: "Bonds", description: "Bonds are fixed-income investments where you lend money to governments or corporations for interest payments and principal repayment at maturity. They provide a stable income stream and help diversify your portfolio." },
    { title: "Mutual Funds", description: "Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management and are ideal for investors seeking diversification with less risk than individual securities." },
    { title: "Exchange Traded Funds", description: "Exchange-Traded Funds (ETFs) are funds that trade on stock exchanges, providing diversification by tracking an index or sector. They offer flexibility and cost-effectiveness in investing." },
    { title: "Retirement Plans", description: "Retirement plans help individuals save for financial security in retirement, often offering tax benefits. Common options include 401(k)s and IRAs, which allow for long-term investment growth." },
    { title: "Annuities", description: "Annuities are insurance products that provide a guaranteed income stream in exchange for a lump-sum payment. They are commonly used in retirement planning for financial security." },
    { title: "Options Trading", description: "Option trading involves buying and selling contracts that give the right to buy or sell an asset at a specified price before a certain date, allowing for flexible strategies in hedging or speculation." },
    { title: "Hybrid Investment", description: "Hybrid investments combine debt and equity features, providing a mix of fixed income and growth potential. They offer diversification and adaptability to various market conditions." },
    { title: "PPF", description: "The Public Provident Fund (PPF) is a long-term savings scheme in India offering attractive interest rates and tax benefits. It encourages savings with a 15-year lock-in period, ensuring capital growth and financial security." },
    { title: "IPO's", description: "IPOs (Initial Public Offerings) allow companies to raise capital by offering shares to the public for the first time. They provide investors with opportunities to invest in a company's growth from the beginning." },
    { title: "ULIPs", description:"Unit Linked Insurance Plans (ULIPs) combine insurance and investment, allowing policyholders to invest in funds while providing life coverage. They offer flexibility in premium payments and investment options." },
    { title: "CryptoCurrency", description: "Cryptocurrency is a digital currency secured by cryptography, operating on decentralized blockchain networks. It offers high return potential but is highly volatile and risky." },
    { title: "Forex Trading", description: "Forex trading involves buying and selling currencies to profit from exchange rate fluctuations. It offers high liquidity and potential returns but carries significant risk." }
  ];

  return (
    <>
      <div className='terdae'>
      <section className="container3">
         <h2 >Services</h2>
          <div className="row3">
            {services.slice(0, showAll ? services.length : 6).map((service, index) => (
              <div className="service3" key={index}>
                <i className="ri-macbook-line"></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <button className="see-all-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'See Less' : 'See All Services'}
          </button>
        </section>
      </div>
      <br/>
      {/* Additional sections remain unchanged */}
    



     {/* Services */}
<br/>
     
    
  <br/>
    {/* footer-start */}
   
		{/* <!-- footer copy right section end --> */}

       {/* footer-end */}


    </>
  )
}

export default Services