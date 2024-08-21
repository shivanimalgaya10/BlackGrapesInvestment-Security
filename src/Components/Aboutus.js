import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
import './Aboutus.css'
import Partner from './Partner';
import img4 from '../assets/Images/img4.jpeg';

const Aboutus = () => {
 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'YOUR_API_ENDPOINT',
        {
          fullName: fullName,
          email: email,
          message: message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY', 
          },
        }
      );

      console.log('Message sent successfully!', response.data);
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmissionStatus('error');
    }
  };

  const handleAlertClose = () => {
    setSubmissionStatus(null);
  };


  return (
    <>
     {/* image-text */}
     <section className="about-trading-benefits-intro">
        <h2>About Us</h2>
      </section>
    
  
   <section className="about-trading-benefits">
  
   <div className="image-container">
      <img
        decoding="async"
        width="514"
        height="582"
        src="https://blackgrapessoftech.com/wp-content/uploads/2023/11/about-3.png"
        alt="Descriptive Alt Text"
        srcSet="https://blackgrapessoftech.com/wp-content/uploads/2023/11/about-3.png 514w, https://blackgrapessoftech.com/wp-content/uploads/2023/11/about-3-265x300.png 265w"
        sizes="(max-width: 514px) 100vw, 514px"
        className="responsive-image" // Optional: add a class for styling
      />
    </div>
  

  <div className="about-benefit-card">
    <h2>Our Vision</h2>
    <p>
    At Black Grapes Investment and Security, our vision is to become a leading global financial partner, dedicated to empowering individuals and organizations with innovative investment strategies and robust security solutions. We aspire to foster a financial environment where every client can achieve their goals with confidence and peace of mind. Through cutting-edge technology, expert insights, and unwavering integrity, we aim to shape a future where financial stability and growth are accessible to all.
    </p>
  </div>

  <div className="about-benefit-card">
    <h2>Our Mission</h2>
    <p>
    Our mission at Black Grapes Investment and Security is to provide exceptional investment and security services that drive growth and safeguard assets. We are committed to delivering personalized solutions tailored to meet the unique needs of each client, leveraging our expertise to navigate complex financial landscapes. By focusing on transparency, excellence, and client satisfaction, we strive to build lasting relationships and ensure that our clients can make informed decisions and achieve their financial objectives with confidence.
     </p>
  </div>
</section>
<section className="about-sir-container">
  <div className="about-sir-image">
  <img 
    loading="lazy" 
    decoding="async" 
    width="620" 
    height="670" 
    src="https://blackgrapessoftech.com/wp-content/uploads/2023/12/the-founders.jpeg" 
    class="attachment-large size-large wp-image-1749 bordered-image" 
    alt="" 
    srcset="https://blackgrapessoftech.com/wp-content/uploads/2023/12/the-founders.jpeg 683w, https://blackgrapessoftech.com/wp-content/uploads/2023/12/the-founders-297x300.jpeg 297w" 
    sizes="(max-width: 683px) 100vw, 683px"/>
    
  </div>
  <div className="about-sir-content">
    <h2 style={{textDecoration:"bold"}}>Meet the founders</h2>
    <p>At Black Grapes Investment and Security, we are led by two visionary leaders. Our founder, Arpit Jain, brings a wealth of experience and innovative thinking that propels our success.
       He continually sets new standards in the industry with his groundbreaking solutions. Deepika Jain, a beacon of creativity, sees every challenge as an opportunity. Her visionary approach fosters a culture of relentless innovation within our company.
        Together, Arpit and Deepika Jain drive our mission to provide unparalleled investment and security services. 
      Their leadership ensures we stay ahead of the curve, offering our clients the best in the industry.</p>
      <h3>Mr. Arpit Jain <br/>Mrs. Deepika Jain</h3>

  </div>
</section>
      <Partner/>
       {/* Aboutus-start*/}
       <div class="container-fluid10">
<div class="container10">
<div class="about-us-moon10">
<h2>We are <b>Black Grapes Investments and Securities</b></h2>
<p class="first10"></p><p>We are Black Grapes Investments and Securities, a trusted leader in the investment sector dedicated to helping you secure and grow your financial future. With over a decade of experience in the industry, our mission is to provide exceptional services that empower individuals and businesses to achieve their financial goals</p>
<p>Our team of experts combines in-depth market knowledge with personalized investment strategies, ensuring you receive the best advice tailored to your unique needs. We prioritize professionalism, integrity, and transparency, which have earned us a solid reputation among our clients.</p>
<p>At Black Grapes, we believe in building lasting relationships based on trust and exceptional customer service. Our commitment to excellence has allowed us to navigate complex financial landscapes successfully, helping our clients make informed decisions and achieve sustainable growth.</p>
</div>
</div>
</div>

       {/* Aboutus-close */}

          {/* Testimonials-end */}
          <br/>
      {/* context us page */}
    
      {/* context-us page-close */}
      <br/>
         {/* footer-start */}
       
		{/* <!-- footer copy right section end --> */}

       {/* footer-end */}

   </>
  )
}

export default Aboutus