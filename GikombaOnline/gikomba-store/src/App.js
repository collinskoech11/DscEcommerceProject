import React from 'react';
<<<<<<< HEAD
import { Switch } from "react-router-dom";
=======
>>>>>>> bef0ef067667d7a0a8b67cccfa40e616839a1c5e
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
import SignUp from './pages/SignUp';
import CheckOut from './pages/Checkout/CheckOut';


function App() {
  return (
    <Router>
    <div className="app">
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route path="/AboutPage" component={AboutPage}/>
     <Route path="/ContactUs" component={ContactUs}/>
     <Route path="/Location" component={Location}/>
     <Route path="/checkOut" component={CheckOut}/>
     
     
     {/*Products links*/}
     <Route path="/MensWear" component={MensWear}/>
     <Route path="/Shoes" component={Shoes}/>
     <Route path="/Watches" component={Watches}/>
     <Route path="/WomensWear" component={WomensWear}/>
     

     {/*product screens */}
     <Route path="/Product/:id" component={WomensProductScreen}/>
     <Route path="/SignUp" component={SignUp}/>
     <Route path="/Login" component={Login}/>
     
     
    </div>
    <CustomFooter/>
    </Router>
    
  );
}

export default App;
