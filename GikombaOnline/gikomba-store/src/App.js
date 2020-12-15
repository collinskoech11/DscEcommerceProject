import React from 'react';
import './App.css';
import './css/products/WomensWear.css';
import './css/Screens/ProductScreen.css';
import Navbar from './Navigators/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import CustomFooter from './Navigators/CustomFooter';
import Login from './pages/Login';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';
import MensWear from './pages/productsPage/MensWear';
import Shoes from './pages/productsPage/Shoes';
import Watches from './pages/productsPage/Watches';
import WomensWear from './pages/productsPage/WomensWear';
import WomensProductScreen from './pages/productsPage/productscreens/WomensProductScreen';
import AddtoCart from './pages/addToCart'

function App() {
  return (
    <Router>
    <div className="app">
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route path="/AboutPage" component={AboutPage}/>
     <Route path="/ContactUs" component={ContactUs}/>
     <Route path="/Location" component={Location}/>
     <Route path="/addToCart" component={AddtoCart}/>
     
     
     {/*Products links*/}
     <Route path="/MensWear" component={MensWear}/>
     <Route path="/Shoes" component={Shoes}/>
     <Route path="/Watches" component={Watches}/>
     <Route path="/WomensWear" component={WomensWear}/>
     

     {/*product screens */}
     <Route path="/Product/:id" component={WomensProductScreen}/>

     <Route path="/Login" component={Login}/>
     <addToCart/>
    </div>
    <CustomFooter/>
    </Router>
    
  );
}

export default App;
