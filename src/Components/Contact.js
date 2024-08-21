import React, { useState } from 'react';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './Contact.css'


const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName' && !value.trim()) {
      error = 'Full Name is required';
    }

    if (name === 'mobile') {
      const mobilePattern = /^[0-9]{10}$/;
      if (!value.match(mobilePattern)) {
        error = 'Mobile number must be 10 digits';
      }
    }

    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 30) {
        error = 'Message must be less than 30 words';
      }
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) {
        isValid = false;
      }
    });

    if (isValid) {
      sendEmail(formData);
      console.log('Form data submitted:', formData);
      // Reset form
      setFormData({
        fullName: '',
        mobile: '',
        message: '',
      });
    }
  };
  const sendEmail = (formData) => {
    const templateParams = {
      fullName: formData.fullName,
      mobile: formData.mobile,
      message: formData.message,
    };

    emailjs.send('service_ayksrjw', 'template_lmtesei', templateParams, 'HEZjTQL1GfjkkeG9f')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };


  return (
    <>
    <div className="contact-page">
      <div className="background-image">
        <div className="overlay">
          <h1>Get In Touch </h1>
          <p>"Black Grapes Investments and Securities is a trusted firm specializing in investment 
             solutions and financial advisory. Our focus includes wealth management, portfolio diversification,
                and comprehensive brokerage services for both individuals and businesses."</p>
        </div>
        <div className="content-contact container">
          <div className="row">
          <div className="left-section col-lg-6">
            <div className="card">
              <div className="info">
                 <div className="info-header">
                 <h3>Address</h3>
                 <FaHome className="icon" />
                  </div>
                   <p>Office No 1141,Scheme No 114,Part-I,Vijaynagar,Indore(M.P)-452010, Indore, India, Madhya Pradesh</p>
              </div>
              <div className="info">
                <div  className="info-header">
                  <h3>Email</h3>
                  <FaEnvelope className="icon" />
                 </div>
                 <p> Owner Email: <a href="mailto:blackgrapes.arpitjain@gmail.com">blackgrapes.arpitjain@gmail.com,</a></p>
                 <p> Senior Email: <a href="blackgrapesinvestments@gmail.com" >blackgrapesinvestments@gmail.com</a></p>
              </div>
              <div className="info">
               
                <div className="info-header">
                  <h3>Phone</h3>
                  <FaPhone className="icon" />
                  </div>
                  <p>Owner No.<a href="tel:+9039397884" >+91 9039397884  , </a></p>
                 <p>Senior No. <a href="tel:+8518097884">+91 8518097884</a></p>
              </div>
            </div>
          </div>
          <div className="right-section col-lg-6">
            <div className="card">
              <h3>Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}

                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                {errors.mobile && <span className="error">{errors.mobile}</span>}

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Max 30 words"
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactUs;

// const [fullName, setFullName] = useState('');

  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [submissionStatus, setSubmissionStatus] = useState(null);

  // const sendMessage = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://jsonplaceholder.typicode.com/posts',  
  //       {
  //         title: fullName,  
  //         body: message,
  //         email: email,
  //       }
  //     );

  //     console.log('Message sent successfully!', response.data);
  //     setSubmissionStatus('success');
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     setSubmissionStatus('error');
  //   }
  // };

  // const handleAlertClose = () => {
  //   setSubmissionStatus(null);
  // };

  // return (
  //   <>
  //   <div className="contact-us-container">
  //     <div className="section-header">
  //       <div className="con">
  //         <h2>Contact Us</h2>
  //         <p>"Black Grapes Investments and Securities is a trusted firm specializing in investment 
  //           solutions and financial advisory. Our focus includes wealth management, portfolio diversification,
  //            and comprehensive brokerage services for both individuals and businesses."</p>
  //       </div>
  //     </div>

  //     <div className="con contact-grid" >
  //       <div className="contact-info">
  //         <div className="contact-info-item">
  //           <div className="contact-info-icon">
  //             <i className="fas fa-home"></i>
  //           </div>

  //           <div className="contact-info-content" >
  //             <h4>Address</h4>
  //             <p>
  //             Office No 1141,Scheme No 114,Part-I,Vijaynagar,Indore(M.P)-452010, Indore, India, Madhya Pradesh</p>
  //           </div>
  //         </div>
  //           <br/>
  //         <div className="contact-info-item">
  //           <div className="contact-info-icon">
  //             <i className="fas fa-phone"></i>
  //           </div>
  //            <br/>
  //           <div className="contact-info-content">
  //             <h4>Phone No.</h4>
  //             <p>+91 9039397884,</p>
  //             <p>+91 8518097884,</p>
  //           </div>
  //         </div>
  //           <br/>
  //         <div className="contact-info-item">
  //           <div className="contact-info-icon">
  //             <i className="fas fa-envelope"></i>
  //           </div>

  //           <div className="contact-info-content">
  //             <h4>Email</h4>
  //             <p>blackgrapesinvestments@gmail.com</p>
  //             <p>blackgrapes.arpitjain@gmail.com</p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="contact-form" style={{width:'295px',overflow:'hidden'}}>
  //         <label>
  //           Full Name:
  //           <input
  //             type="text"
  //             value={fullName}
  //             onChange={(e) => setFullName(e.target.value)}
  //           />
  //         </label>
  //         <br />
  //         <label >
  //           Email:
  //           <input
  //           placeholder='....gmail.com'
  //             type="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </label>
  //         <br />
  //         <label>
  //           Type your message:
  //           <textarea
  //             value={message}
  //             onChange={(e) => setMessage(e.target.value)}
  //             placeholder="Type your message here"
  //           />
  //         </label>
  //         <br />
  //         <button onClick={sendMessage}>Send Message</button>

  //         {submissionStatus === 'success' && (
  //           <div className="alert success" onClick={handleAlertClose}>
  //             Successfully submitted! Click to close.
  //           </div>
  //         )}

  //         {submissionStatus === 'error' && (
  //           <div className="alert error" onClick={handleAlertClose}>
  //             Error submitting message. Click to close.
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  //   {/* contect-close */}

  //   <br/>
  //       {/* footer-start */}
       
	// 	{/* <!-- footer copy right section end --> */}

  //      {/* footer-end */}
