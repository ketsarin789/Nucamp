import React, {Component} from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import './App.css';


class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Navbar dark color='success'>
          <div className='container'>
            <NavbarBrand href="/">Travel with me</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
