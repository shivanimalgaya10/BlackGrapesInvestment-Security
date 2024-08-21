import React from 'react';
import './Products.css'; // Ensure to import the CSS file
import st1 from '../assets/Images/stocks1.jpg'
import b1 from '../assets/Images/s1.jpg'
import mf from '../assets/Images/mf1.jpg'
import al from '../assets/Images/mqdefault.jpg'
import etf from '../assets/Images/etfcard.jpg'
import rp from '../assets/Images/rpcard.jpg';
import an from '../assets/Images/ancard.jpg'
import ipo from '../assets/Images/ipocard.jpg'
import com from '../assets/Images/img12.jpeg'
import der from '../assets/Images/derivatives.jpg'
import ot from '../assets/Images/otcard.jpg';
import ppf from '../assets/Images/ppf.jpg';
import nps from '../assets/Images/nps1.jpg'
import ulips from '../assets/Images/ulipcard.jpg'
import css from '../assets/Images/csscard.jpg'
import cc from '../assets/Images/cpcard.jpg'
import ft from '../assets/Images/ftcard.jpg';
import it from '../assets/Images/itcard.jpg'
import cod from '../assets/Images/codcard.jpg'
import hi from '../assets/Images/hicard.jpg';


const products = [
  { id: 1, name: 'Stocks', link: '/stocks',image:st1 },
  { id: 2, name: 'Bonds', link: '/services/portfolio-management',image:b1 },
   { id: 3, name: 'Mutual-Fund', link: '/services/mutual-fund',image:mf },
  { id: 4, name: 'Algo Trading', link: '/services/algo',image:al },
  { id: 5, name: 'Exchange-Traded Funds', link: '/services/exchange-fund',image:etf },
  { id: 6, name: 'Retirement Plans', link: '/services/retirement-plans',image:rp},
  { id: 7, name: 'Annuities', link: '/services/annuities',image:an },
  { id: 8, name: 'IPO', link: '/services/ipos',image:ipo},
  { id: 9, name: 'Comodities', link: '/services/commodities',image:com},
  { id: 10, name: 'Derivatives', link: '/services/derivatives',image:der },
  { id: 11, name: 'Option Trading', link: '/option-trading',image:ot},
  { id: 12, name: 'PPF', link: '/ppf',image:ppf},
  { id: 13, name: 'NPS', link: '/nps',image:nps},
  { id: 14, name: 'ULIPS', link: '/ulips',image:ulips},
  { id: 15, name: 'Citizen Saving Scheme', link: '/citizen-saving-scheme',image:css},
  { id: 16, name: 'CryptoCurrency', link: '/cryptocurrency',image:cc},
  { id: 17, name: 'Forex Trading', link: '/forex',image:ft},
  { id: 18, name: 'Indices Trading', link: '/indices-trading',image:it},
  { id: 19, name: 'Certificate Of Deposit', link: '/certificate-of-deposit',image:cod},
  { id: 20, name: 'Hybrid Investment', link: '/hybrid-investment',image:hi},
];

const Products = () => {
  return (
    <section className="products-section">
      <h2 className="products-heading">Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/><br/>
            <strong>{product.name}</strong>
            <a href={product.link} className="read-more-button">Know More...</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

