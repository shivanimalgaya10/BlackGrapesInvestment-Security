import React from 'react';
import { Link } from 'react-router-dom';
import './DomainSold.css';

const DomainSold = () => {
  return (
    <div className="slider-container">
      <h1 className='heading' style={{color:'wheat',textAlign:'center'}}>Domains We've Sold</h1>
     
      <div className="slider-wrapper">
        <Link to="/services/ipos" className="card" style={{ borderRadius: '10px 0px 10px' }}>
          <p style={{ textAlign: 'center' }}><strong>IPO</strong></p>
        </Link>
        <Link to="/stocks" className="card" style={{ borderRadius: '10px 0px 10px' }}>
          <p style={{ textAlign: 'center' }}><strong>Stocks</strong></p>
        </Link>
        <Link to="/services/mutual-fund" className="card" style={{ borderRadius: '10px 0px 10px' }}>
          <p style={{ textAlign: 'center' }}><strong>Mutual Fund</strong></p>
        </Link>
        <Link to="/services/retirement-plans" className="card" style={{ borderRadius: '10px 0px 10px' }}>
          <p style={{ textAlign: 'center' }}><strong>Retirement Plans</strong></p>
        </Link>
        <Link to="/services/annuities" className="card" style={{ borderRadius: '10px 0px 10px' }}>
          <p style={{ textAlign: 'center' }}><strong>Annuities</strong></p>
        </Link>
        <Link to="/services/commodities" className="card" style={{ borderRadius: '10px 0px 10px' }}>
          <p style={{ textAlign: 'center' }}><strong>Commodities</strong></p>
        </Link>
      </div>
    </div>
  );
}

export default DomainSold;
