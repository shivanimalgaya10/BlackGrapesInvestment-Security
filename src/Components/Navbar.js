import React,{useState} from 'react';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DematAccount from './DematAccount';
import './Navbar.css';
import logo from '../assets/Images/logo-invest.jpeg';

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
    <Navbar className='header1' expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/"   className="d-flex align-items-center ">
          <img src={logo} alt="" style={{ borderRadius: "20%", height: '50px' }} /> 
         &nbsp; <strong style={{ fontSize:'22px',fontFamily:'inherit',color:'#357283'}}> Black Grapes Investment & Securities</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  style={{ marginLeft: "auto" }}>
            <Nav.Link   as={Link} to="/home"><strong>Home</strong></Nav.Link>

            {/* Dropdown for Services */}
            <li className="dropdown">
              <Link className="dropdown-toggle" to="/services" >
                <strong>Services</strong>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/stocks">Stocks</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/portfolio-management">Bonds</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/mutual-fund">Mutual Funds</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/algo">Algo-Trading</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/exchange-fund">Exchange-Traded Funds</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/retirement-plans">Retirement Plans </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/annuities">Annuities </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/ipos">IPOs</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/commodities">Commodities</Link>
                </li>
              
                <li>
                  <Link className="dropdown-item" to="/services/derivatives">Derivatives</Link>
                </li>
               

              </ul>
            </li>

            {/* Dropdown for Other Services */}
            <li className="dropdown">
              <Link className="dropdown-toggle" >
               <strong>Other Services</strong>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/option-trading">Option-Trading</Link>
                </li>
              
                <li>
                  <Link className="dropdown-item" to="/ppf">PPF </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ulips">ULIPS </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/citizen-saving-scheme">Citizen Saving Scheme</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cryptocurrency">CryptoCurrency</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/forex">Forex-Trading</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/indices-trading">Indices-Trading </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/certificate-of-deposit">Certificate of Deposit</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hybrid-investment">Hybrid Investment</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/nps">NPS</Link>
                </li>
              </ul>
            </li>

            <Nav.Link   as={Link} to="/aboutus" ><strong>About us</strong></Nav.Link>
            <Nav.Link  as={Link} to="/contact" ><strong>Contact Us</strong></Nav.Link>
            </Nav>
            {/* <Nav.Link as={Link} to="/contact" style={{ backgroundColor: '#18819d',color:'white',marginLeft:'10px'}}><button  className="no-wrap" ><strong>Open Demat Account</strong></button></Nav.Link> */}
            <Nav className="ml-auto">
              <Button variant="primary" onClick={handleShow} style={{ marginLeft: '10px' }}>
                Open Demat Account
              </Button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <DematAccount show={show} handleClose={handleClose} />
    </>
  );
};

export default MyNavbar;
