import React from 'react'

import  { useState } from 'react';
import axios from 'axios';
import img20 from '../assets/Images/indicesTra.jpg';
// import img3 from '../assets/Images/img3.jpeg';
import './Sreejiinfo.css'
import Products from './Products';
import Partner from './Partner';

import Contact from './Contact';
import img11 from '../assets/Images/Portfolioanagement.jpg'
import img12 from '../assets/Images/marketAnalysis.jpg'
import img13 from '../assets/Images/financialPlaning.jpg'
import img14 from '../assets/Images/riskAssess.jpg'
import img15 from '../assets/Images/mutialfound.jpg'
import ImageSlider from './ImageSlider';
import img16 from '../assets/Images/pexels-tab-trader-180445110-24709183.jpg'



const Sreejiinfo = () => {
  const sliderWrapper = document.getElementById('sliderWrapper');
  let currentIndex = 0;
  
  function showCard(index) {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const newPosition = -index * cardWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showCard(currentIndex);
  });
  
  function nextCard() {
    currentIndex = (currentIndex + 1) % sliderWrapper.children.length;
    showCard(currentIndex);
  }
  
  function prevCard() {
    currentIndex = (currentIndex - 1 + sliderWrapper.children.length) % sliderWrapper.children.length;
    showCard(currentIndex);
  }
  
  // Add event listeners for navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      nextCard();
    } else if (event.key === 'ArrowLeft') {
      prevCard();
    }
  });
  ////////////////////////////////////////////////////////////////////////
 
  
  return (
    <>
      {/* image-text */}
      <div class="example" >
        <ImageSlider/>
        <h1 class="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationduration: '1s', animationname: 'slideInDown',color:'white' }}>
       <big>Secure Your Future,<br/>With Smart Investments</big>
       
      <p className='head'  style={{ fontSize: '22px' }}> Elevating your financial journey with comprehensive brokerage services
       and expert guidance. Unlock the path to sustainable growth and secure
       your tomorrow with Black Grapes Investments and Securities.</p>
       </h1>

      </div>
      <div  style={{paddingTop:'5px',paddingBottom:'10px'}}>
        <h1  className="website">Welcome to Our <br/> Black Grapes Investment & Securities
        </h1>
        <div style={{textAlign:'center',marginTop:'25px',lineHeight:'0.8',fontSize:'20px'}} >
    <p>Black Grapes Investments and Securities is dedicated to providing comprehensive investment solutions tailored to your </p>
    <p>financial goals. With a focus on mutual funds, stocks, and bonds, we offer expert guidance to help you navigate the </p>
    <p>complexities of the investment landscape. Our platform features user-friendly tools for tracking investments, educational </p>
    <p>resources for informed decision-making, and personalized support from experienced advisors. Trust us to optimize your </p>
    <p>investment strategy and secure your  financial future. Explore our services today to start your journey towards financial growth!</p>
 
</div>

      </div>
      
      {/* image-text-close */}
      {/* text-image-start */}
 
        {/* Services-start */}
      <div class="top width " style={{backgroundColor:"#31363F",color:'white'}}>
<h2 className='service_head'> Our Services</h2>
<div ></div>
<div class="row no-gutters">
<div class="col-md-12 d-flex justify-content-around flex-wrap">
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top1">
<div class="domain-brocerage-background domain-background"></div>
<img src='https://apexmoon.com/img/Proven-Success-h.svg' width={'100px'} alt=''/>
<a href="#investment-advisory"><h3>INVESTMENT ADVISORY</h3></a>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top2">
<div class="domain-acquistions-background domain-background"></div>
<img src='https://apexmoon.com/img/Domain-acquisitions-icon-h.svg' width={'100px'} alt=''/>
<a href="#market-analysis"><h3>MARKET ANALYSIS</h3></a>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top3">
<div class="services-background"></div>
<div class="domain-acquistions-valuation domain-background"></div>
<img src='https://apexmoon.com/img/Domain-valuation-icon-h.svg' width={'100px'} alt=''/>
<a href="#risk-assessment"><h3>RISK ASSESSMENT</h3></a>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12">
<a href="phpl#bottom4" class="portfolio-link">
<div class="portfolio domain-background"></div>
<img src='https://apexmoon.com/img/portfolio-management-icon-h.svg' width={'100px'} alt=''/>
<a href="#portfolio-management"><h3>PORTFOLIO MANAGMENT</h3></a>
</a>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top3">
<div class="services-background"></div>
<div class="domain-acquistions-valuation domain-background"></div>
<img src='https://apexmoon.com/img/Creative-h.svg' width={'100px'} alt=''/>
<a  href="#financial-planning"><h3>FINANCIAL PLANNING</h3></a>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top3">
<div class="services-background"></div>
<div class="domain-acquistions-valuation domain-background"></div>
<img src='https://apexmoon.com/img/Domain-brokerage-icon-h.svg' width={'100px'} alt=''/>
<a href="#mutual-fund-advisory"><h3>MUTUAL FUND ADVISORY</h3></a>
<p></p>
</div>
</div>
</div>
</div>
   {/* Services-close */}
   {/* our products start */}
   <Products/>
   <Partner/>


      {/* text-image-close */}
      {/* Why choose Us-start */}
      <div class="feat  pt-5 pb-5" style={{backgroundColor:'#ECF2FF'}}>
    <div class="container5" style={{overflowX:'hidden'}}>
      <div class="row pr-5 pl-5">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>With over a decade of experience, we provide expert guidance and comprehensive brokerage services.<br/> Trust us to unlock sustainable growth and secure your financial future.
            </p>
        </div>
        <div class="col-lg-4 col-sm-6" >
          <div class="item"> <span class="icon feature_box_col_one">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVsf8ScEOF-XWHSWBKcqH-p8VyXyMgDCtlg&usqp=CAU'
            alt=''/></span>
            <h6>Modern Investment Tools</h6>
            <p>We utilize the latest technology and tools to offer innovative and effective investment solutions, meeting the demands of the modern financial world.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two">
            <img src='https://img.freepik.com/premium-vector/abstract-arrow-logo-3d-colorful-arrow-logo-circle-earth-icon_345408-1123.jpg'
           alt='' /></span>
            <h6>Creative Financial Solutions</h6>
            <p>We combine creativity with client feedback to develop exceptional financial strategies that meet and exceed your investment goals.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three">
            <img src='https://www.shutterstock.com/image-vector/operator-logo-vector-icon-online-260nw-2126789186.jpg' alt=''/></span>
            <h6>24 x 7 User Support</h6>
            <p>Our dedicated support team is available around the clock to assist with any problems or queries you may have.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four">
            <img src='https://png.pngtree.com/template/20200101/ourmid/pngtree-growth-logo-template-blue-business-image_343379.jpg' alt=''/></span>
            <h6>Business Growth</h6>
            <p>We believe that true growth and happiness come from the journey itself. We're here to help you climb to new financial heights.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five">
            <img src='https://e7.pngegg.com/pngimages/457/718/png-clipart-computer-icons-marketing-strategy-business-sales-marketing-text-logo.png' alt=''/></span>
            <h6>Market Strategy</h6>
            <p>We embrace technological advancements to stay ahead in the market, providing strategies that outpace outdated business models.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six">
            <img src='https://logo.com/image-cdn/images/kts928pd/production/f384d24494a9a0cabebbcb7f790b496df575d8cb-341x352.png?w=1080&q=72' alt=''/></span>
            <h6>Affordable cost</h6>
            <p>We value our services and offer them at a fair price, ensuring you get the best value without compromising on quality.</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
     
    
  <br/>
     {/* card0-view start*/}
     <section className="home-trading" id="investment-advisory">
  <div className="home-trading-card">
    <div className="home-trading-image">
      <img src={img11}  alt="Trading Image"/>
    </div>
    <div className="home-trading-content">
      <h2>Investment Advisory</h2>
      <p>
      Black Grapes Investment Advisory is dedicated to providing personalized investment solutions that meet your financial goals. Our experienced team combines market expertise with a deep understanding of your unique needs. We carefully assess your financial situation, risk tolerance, and long-term objectives to develop a tailored investment strategy. Whether you aim to grow your wealth, prepare for retirement, or reach specific financial targets, 
      we offer the insights and support you need to succeed.
      We believe that informed decisions lead to better outcomes.
     </p>
      <p>
      Our advisory services cover various investment options, including stocks, mutual funds, bonds, and alternative investments. We keep you informed about market trends and economic changes, helping you make timely adjustments to your portfolio. Our mission is to simplify the investment process and equip you with the knowledge and tools to navigate the financial landscape confidently.
      </p>
    </div>
  </div>


</section>
  {/* card0-view start*/}
     {/* card-view start*/}
     <section className="home-trading" id="market-analysis">
  <div className="home-trading-card">
    <div className="home-trading-image">
      <img src={img12}  alt="Trading Image"/>
    </div>
    <div className="home-trading-content">
      <h2>Market Analysis</h2>
      <p>
      Black Grapes Market Analysis offers comprehensive insights into current market trends and economic conditions to guide your investment decisions. Our expert analysts utilize quantitative data and qualitative assessments to evaluate various sectors and asset classes, helping you identify opportunities and potential risks. We provide in-depth reports on market performance, sector trends, and macroeconomic factors, ensuring you stay informed.
           By continuously monitoring global events and policy changes, we equip you with the knowledge needed to navigate market fluctuations confidently.
          </p>
      <p>
      Our focus on clear communication fosters a collaborative environment, allowing you to discuss findings and address any questions. With our actionable market analysis, you can make informed choices that align with your financial goals and optimize your investment strategy for success. 
      Trust Black Grapes to be your partner in navigating the complexities of the financial markets.
      </p>
    </div>
  </div>


</section>
{/* card view end */}
           {/* card2-view start*/}
           <section className="home-trading" id="risk-assessment">
  <div className="home-trading-card">
    <div className="home-trading-image">
      <img src={img13}  alt="Trading Image"/>
    </div>
    <div className="home-trading-content">
      <h2>Risk Management</h2>
      <p>
      Black Grapes Risk Management helps you identify and manage potential risks in your investment portfolio to keep your finances secure. Our experienced team looks closely at market trends and asset performance to understand where risks may arise. We create customized risk management plans that match your financial goals and comfort level with risk, giving you confidence in your investment decisions.
      We continuously monitor the market and adjust your portfolio as needed to address any new risks that may come up. With clear and open communication, we ensure you stay informed about any challenges and opportunities. At Black Grapes, we are dedicated to protecting your investments from unexpected changes, allowing you to focus on achieving your long-term financial success. 
      Let us partner with you to build a strong investment strategy that prioritizes managing risk and securing your financial future.
     </p>
     
    </div>
  </div>


</section>
  {/* card2-view start*/}
       {/* card3-view start*/}
       <section className="home-trading" id="portfolio-management">
       <div className="home-trading-card">
         <div className="home-trading-image">
           <img src={img14}  alt="Trading Image"/>
        </div>
      <div className="home-trading-content">
      <h2>Portfolio Management</h2>
       <p>
       Black Grapes Portfolio Management offers personalized strategies to help you reach your financial goals. Our experts analyze your financial situation, risk tolerance, 
       and market trends to create a customized investment plan. We continuously monitor your portfolio and make necessary adjustments to keep it aligned with your objectives.Using thorough market research and advanced tools, we identify opportunities and manage risks effectively. We keep you informed and involved in the decision-making process, ensuring transparency and building trust. 
       With Black Grapes, you can be confident that your investments are managed with care and expertise, guiding you towards long-term financial success.
       </p>
      <p>
     
      </p>
    </div>
  </div>
</section>
{/* card3view end */}
    {/* card4-view start*/}
    <section className="home-trading" id="financial-planning">
       <div className="home-trading-card">
         <div className="home-trading-image">
           <img src={img15}  alt="Trading Image"/>
        </div>
      <div className="home-trading-content">
      <h2>Financial Planning</h2>
       <p>
       Black Grapes Financial Planning provides tailored strategies to help you achieve your financial goals. Our team of experts carefully assesses your current financial situation, future aspirations, and risk tolerance to create a personalized financial plan. We consider all aspects of your financial life, including savings, investments, retirement planning, and insurance needs.
       We continuously monitor your progress and make necessary adjustments to keep your plan on track. By staying informed about market trends and economic changes, we help you make proactive decisions. Our commitment to transparency ensures you understand each step of the planning process. 
       With Black Grapes, you can trust that your financial future is in capable hands, giving you the confidence to pursue your dreams with a solid financial foundation.
       </p>
      <p>
     
      </p>
    </div>
  </div>
</section>
{/* card4 view end */}
       
         {/* card5-view start*/}
    <section className="home-trading" id="mutual-fund-advisory">
       <div className="home-trading-card">
         <div className="home-trading-image">
           <img src={img16}  alt="Trading Image"/>
        </div>
      <div className="home-trading-content">
      <h2> Mutual Fund Advisory</h2>
       <p>
       Black Grapes Mutual Fund Advisory provides expert guidance to help you navigate the world of mutual fund investments. Our experienced advisors analyze your financial goals, risk tolerance, and investment horizon to recommend the best mutual fund options for you. We offer a diverse range of funds, including equity, debt, and hybrid, to suit your unique needs.
          We continuously monitor the performance of your mutual fund portfolio, making adjustments as needed to maximize returns and manage risks. Our transparent approach ensures you are always informed about your investments' progress and any market changes. With Black Grapes, you receive personalized advice and support, 
          empowering you to make informed decisions and achieve your financial goals through smart mutual fund investments.
       </p>
      <p>
     
      </p>
    </div>
  </div>
</section>
{/* card5 view end */}
       
  

  
    {/* image-text8-end */}
            <br/>
          {/* Testimonials-start */}
          <div className='bavhtr'>
          <div class="container" style={{backgroundImage:'url(https://apexmoon.com/img/testimonils-bg.jpg)'}} >
    <div class="lead-testimonial-cont" >
      <br/>
      <h2 class="tstmnl-hndg" style={{color:'white',textAlign:'center'}}>What people say about us</h2>
      <div id="testimonialCarousel" class="lead-tstmnl-slider carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        
          {/* <!-- Add more carousel items for other testimonials --> */}
          <div class="carousel-item active" style={{color:'white'}}>
            <div class="lead-tstmnl-slide" >
              <div class="lead-tstmnl-img">
              </div>
              <div class="lead-tstmnl-text-cont">
                <span class="lead-tstmnl-comment">
                Working with Black Grapes Investment And Security has been a game-changer for my financial journey. Their expert guidance and personalized service helped me navigate the complexities of investing, and I couldn't be happier with my portfolio's growth. Highly recommend!
                </span>
                <ul class="lead-tstmnl-nm-dsg"  style={{textAlign:'center'}}>
                  <li>Shivani Malgaya</li>
                  <li>Software developer</li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div class="carousel-item" style={{color:'white'}}>
            <div class="lead-tstmnl-slide">
              <div class="lead-tstmnl-img">
              </div>
              <div class="lead-tstmnl-text-cont">
                <span class="lead-tstmnl-comment">
                I was initially hesitant about investing, but the team at [Your Company Name] took the time to educate me and build my confidence. Their transparent approach and constant support have made all the difference. I'm now on track for a secure financial future!
                </span>
                <ul class="lead-tstmnl-nm-dsg" style={{textAlign:'center'}}>
                  <li>Suraj verma</li>
                  <li>Android Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Add navigation controls if needed --> */}
        <a class="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  </div>
          {/* Testimonials-end */}
          <br/>
          
      {/* context us page */}
   
 <Contact/>
      {/* context-us page-close */}
    <br/>
  
     
    </>
  )
}

export default Sreejiinfo