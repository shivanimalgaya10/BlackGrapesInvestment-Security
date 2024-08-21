import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sreejiinfo from './Components/Sreejiinfo';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Stocks from './Components/Stocks';
import Bonds from './Components/Bonds';
import MutualFund from './Pages/MutualFund';
import ExchangeTraded from './Pages/ExchangeTraded';
import PPF from './otherPages/PPF'
import Retirement from './Pages/Retirement';
import Annuities from './Pages/Annuities';
import ULIPS from './otherPages/ULIPS';
import CitizenSaving from './otherPages/CitizenSaving';
import CryptoCurrency from './otherPages/CryptoCurrency';
import ForexTrading from './otherPages/ForexTrading';
import IPO from './Pages/IPO';
import DepositCertificate from './otherPages/DepositCertificate';
import HybridInvestment from './otherPages/HybridInvestment';
import IndicesTrading from './otherPages/IndicesTrading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Commodities from './Pages/Commodities';
import ScrollToTopButton from './Components/ScrollToTopButton';
import WhatsAppIcon from './Components/whatsAppIcon';
import OptionTrading from './otherPages/OptionTrading';
import NPS from './otherPages/NPS';
import AlgoTrading from './Pages/AlgoTrading';
import Derivatives from './Pages/Derivatives';

// import ChatIcon from './ChatIcon';
import Footer from './Components/Footer';
import Social from './Components/Social';
import ChatWidget from './Components/ChatWidget';

function App() {
  return (
   
    <BrowserRouter >
    <Social/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Sreejiinfo/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/Services' element={<Services/>} />
      <Route path='/stocks' element={<Stocks/>}/>
      <Route path='/services/portfolio-management' element={<Bonds/>}/>
      <Route path="/services/mutual-fund" element={<MutualFund/>} /> 
      <Route path="/services/exchange-fund" element={<ExchangeTraded />} /> 
      <Route path="/services/retirement-plans" element={<Retirement/>} /> 
      <Route path='/services/annuities' element={<Annuities/>}/>
      <Route path="/services/commodities" element={<Commodities/>} /> 
      <Route path='/services/ipos' element={<IPO/>}/>
      <Route path='/ppf' element={<PPF/>}/>
      <Route path='/ulips' element={<ULIPS/>}/>
      <Route path='/citizen-saving-scheme' element={<CitizenSaving/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cryptoCurrency' element={<CryptoCurrency/>}/>
      <Route path='/forex' element={<ForexTrading/>}/>
      <Route path='/certificate-of-deposit' element={<DepositCertificate/>}/>
      <Route path='/indices-trading' element={<IndicesTrading/>}/>
      <Route path='/hybrid-investment' element={<HybridInvestment/>}/>
      <Route path='/nps' element={<NPS/>}/>
      <Route path='/services/algo' element={<AlgoTrading/>}/>
      <Route path='/services/derivatives' element={<Derivatives/>}/>
      <Route path='/option-trading' element={<OptionTrading/>}/>
      
     </Routes>
    <ScrollToTopButton/>
    <Footer/>
   
    <WhatsAppIcon/>
    <ChatWidget/> `                                                                                                                                                                       ```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   `                                                                                                                                                                                                                                                                                                                                                                           `
  </BrowserRouter>
   
  
  );
}

export default App;
