import React from 'react';
import './App.css';
import './css/products/WomensWear.css'
import Navbar from './Navigators/NavBar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import CustomFooter from './Navigators/CustomFooter';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import MensWear from './pages/productsPage/MensWear';
import Shoes from './pages/productsPage/Shoes';
import Watches from './pages/productsPage/Watches';
import WomensWear from './pages/productsPage/WomensWear';

function App() {
  return (
    <Router>
    <div>
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route path="/AboutPage" component={AboutPage}/>
     <Route path="/ContactUs" component={ContactUs}/>
     
     {/*Products links*/}
     <Route path="/MensWear" component={MensWear}/>
     <Route path="/Shoes" component={Shoes}/>
     <Route path="/Watches" component={Watches}/>
     <Route path="/WomensWear" component={WomensWear}/>
     
    </div>
    <CustomFooter/>
    </Router>
    
  );
}

export default App;
