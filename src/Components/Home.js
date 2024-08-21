import React from 'react'
import './Home.css'
import img13 from '../assets/Images/img13.jpeg'
import img16 from '../assets/Images/img16.jpeg'
import p1 from '../assets/Images/p5.jpg'
import p2 from '../assets/Images/p2.jpg'
import p3 from '../assets/Images/p3.jpg'
import p4 from '../assets/Images/p4.jpg'

import ImageSliderHome from './ImageSliderHome'
import Partner from './Partner'

const Home = () => {
  return (
    <>
      {/* image-text */}
      <div class="example" >
        <ImageSliderHome/>
       
      </div>
      {/* image-text-close */}

  
      {/* card-view start*/}
      <section className="home-trading">
  <div className="home-trading-card">
    <div className="home-trading-image">
      <img src={img16}  alt="Trading Image"/>
    </div>
    <div className="home-trading-content">
      <h2>Your Trusted Partner in Investment and Security</h2>
      <p>
      At  Black Grapes Investment & security , we put your financial success and security first. Our expert team provides personalized investment strategies designed to help you reach your financial goals.
           We use advanced security measures to protect your assets while ensuring they grow.
           With a commitment to trust, transparency, and excellence, we build long-term relationships with our clients. 
          
      </p>
      <p>
      Whether you're new to investing or looking to diversify your portfolio, we offer the guidance and support you need. Choose Black Grapes Investment & security and embark on a secure and prosperous financial journey with a partner you can trust.
          At Black Grapes Investments and Securities, we are committed to delivering exceptional service and helping our clients navigate the complexities of the financial landscape with confidence
      </p>
    </div>
  </div>


</section>
{/* card view end */}
           {/* card2-view start*/}
           <section className="home-trading">
  <div className="home-trading-card">
    <div className="home-trading-image">
      <img src={img13}  alt="Trading Image"/>
    </div>
    <div className="home-trading-content">
      <h2>Empower Your Financial Future  with Black Grapes</h2>
      <p>
      At Black Grapes Investment and Security, we transform your financial goals
           into tangible results. Our expert team delivers tailored investment strategies 
           \to help you grow and secure your wealth. We blend cutting-edge security measures
            with deep market insights to protect your assets and maximize your returns.
          
      </p>
      <p>
      With 
            a personalized approach and unwavering support, we guide you through every step of your 
            financial journey. Choose Black Grapes to partner with a trusted advisor and embark 
          on a path to a secure and prosperous future. Your journey to financial success begins here. 
      </p>
    </div>
  </div>


</section>
  {/* card2-view start*/}

     <div >
      <div class="container mt-md-6 mt-5" id="nav-pills" className='service'>
      <div class="row" >
        <div class="col-lg-9 col-xl-7 mx-auto text-center">
          <h2 className='lead1' >Our Services</h2>
          <p class="lead">At Black Grapes Investments and Securities, we recognize that retaining a loyal customer base is essential for success. Our dedication to exceptional service has helped us maintain an impressive 85% customer retention rate. As a leading investment firm, we empower our clients with cutting-edge financial solutions and personalized strategies, ensuring they achieve their financial goals with confidence and trust.
          By transforming your investment approach with the latest advancements in financial technology and tailored services, we empower you to achieve your financial aspirations. Trust us to provide the guidance and support you need to secure a prosperous future.</p>
        </div>
      </div>
      <div class="row align-items-center mt-md-6 mt-4">
        <div class="col-lg-6 d-none d-lg-block">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane active show" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
              <img alt="Image Not Found"  class="img-fluid" src={p3}/>
            </div>
            <div class="tab-pane" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
              <img alt="Image Not Found"  class="img-fluid" src={p2}/>
            </div>
            <div class="tab-pane" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
              <img alt="Image Not Found" class="img-fluid" src={p1}/>
            </div>
            <div class="tab-pane" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
              <img alt="Image Not Found"  class="img-fluid" src={p4}/>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="px-lg-5 nav nav-pills outline-pills text-md-left text-center">
            <li class="nav-item position-relative">
              <a class="hover-nav-link text-gray nav-link p-3 active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" aria-controls="v-pills-1">
                <h3 class="text-orange h4">Smart Investment Strategies</h3>
                <p class="m-0">Unlock your financial potential with our tailored investment plans. From stocks to real estate, we help you diversify and grow your portfolio with confidence.</p>
              </a>
            </li>
            <li class="pt-3 nav-item position-relative">
              <a class="hover-nav-link text-gray nav-link p-3" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" aria-controls="v-pills-2">
                <h3 class="text-orange h4">Advanced Security Solutions</h3>
                <p class="m-0">Your peace of mind is our priority. Our state-of-the-art security measures ensure your investments are safe from fraud and cyber threats.</p>
              </a>
            </li>
            <li class="pt-3 nav-item position-relative">
              <a class="hover-nav-link text-gray nav-link p-3" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" aria-controls="v-pills-3">
                <h3 class="text-orange h4">Personalized Financial Planning</h3>
                <p class="m-0">Achieve your financial goals with our expert guidance. We create customized plans that align with your unique needs and future aspirations.</p>
              </a>
            </li>
            <li class="pt-3 nav-item position-relative pb-1">
              <a class="hover-nav-link text-gray nav-link p-3" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" aria-controls="v-pills-4">
                <h3 class="text-orange h4">Market Insights and Trends</h3>
                <p class="m-0">Stay ahead of the curve with our in-depth market analysis. Our insights help you make informed decisions and capitalize on emerging opportunities.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
{/* close-demo */}
<Partner/>

  
   
   {/* footer-start */}
  
		{/* <!-- footer copy right section end --> */}

       {/* footer-end */}
       {/* <WhatsAppIcon/> */}
    </>
  )
}

export default Home