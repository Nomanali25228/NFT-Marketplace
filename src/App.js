import logo from './logo.svg';
import './App.css';

import Header from './constents/header/Header';
import Scroller from './components/scroller/Scroller';
import Trending from './constents/trending col/Trending';
import Top from './constents/top creater/Top';
import Browse from './constents/browse categories/Browse';
import Magic from './components/magic mushrooms/Magic';
import Discover from './constents/discover more/Discover';
import Worke from './constents/worke how/Worke';
import Weekly from './constents/weekly digest/Weekly';
import Footer from './constents/footer/Footer';


function App() {
  return(
    
    <div className='contener' >
 
      <Header />

      <Scroller />

      <Trending />

      <Top />

      <Browse />

      <Magic />

      <Discover />

      <Worke />

      <Weekly />

      <Footer />
            
    </div>
  );
}

export default App;
