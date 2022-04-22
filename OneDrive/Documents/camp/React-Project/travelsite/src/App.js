import React, {Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap'
import Directory from './components/DirectComponent';
import './App.css'
class App extends Component {
  render(){
    return(
        <div className='App'>
          <Navbar dark >
            <div className='container'>
              <NavbarBrand href="/">Travel with me</NavbarBrand>
            </div>
          </Navbar>
          <Directory />
        </div>
    )
  }
}

export default App;
