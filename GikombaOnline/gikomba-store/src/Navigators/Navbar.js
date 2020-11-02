import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap'

class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <Navbar.Brand href="/">
          <strong className="white-text">Gikosh.com</strong>
        </Navbar.Brand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active to="/">
            <Nav.Link href="/">Home</Nav.Link>
            </MDBNavItem>
            <MDBNavItem href="/AboutPage">
            <Nav.Link href="/AboutPage">About Us</Nav.Link>
            </MDBNavItem>

            <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">Help</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/ContactUs">Contact Us</MDBDropdownItem>
                <MDBDropdownItem href="/MensWear">FAQs</MDBDropdownItem>
                
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Store</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/WomensWear">Women's Wear</MDBDropdownItem>
                  <MDBDropdownItem href="/MensWear">Men's Wear</MDBDropdownItem>
                  <MDBDropdownItem href="Watches">Watches</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Shoes</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavBar;