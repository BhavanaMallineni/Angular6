import React, { Component, ReactPropTypes } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Button from 'antd/lib/button';
import Menu from './compoents/MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
class App extends Component {
  render() {
    return (
     

      <div className="container-fluid">
         <Navbar dark color="primary">
         <div className="container">
         <NavbarBrand href="/">Matrimony Site</NavbarBrand>
         </div>
         </Navbar>
         <Menu/>
       </div>
      
    );
  }
}
App.propTypes = {
  children: ReactPropTypes.object.isRequired
};
export default App;
