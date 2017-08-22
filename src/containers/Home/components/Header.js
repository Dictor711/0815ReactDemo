import React, { Component } from 'react';
import logo from 'static/images/logo.png';
import github from 'static/images/github.png';
import facebook from 'static/images/facebook.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">台灣新聞</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#/about/">關於我們</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/contact/">聯絡我們</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
