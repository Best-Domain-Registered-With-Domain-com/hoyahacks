import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, {Component} from 'react';
import Notification from './notification.js';
import ReactDOM from 'react-dom';


function shoot(){
  alert(Notification.state.message);
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Tessellate</NavbarBrand>
          </div>
        </Navbar>
          <div className="container">
            Your friend, Ben: 
            <button onClick={shoot}>Text your friend!</button>
            Your friend, Not Ben: 
            <button onClick={shoot}>Text your friend!</button>
          </div>
          <div className="containers"><Notification /></div>

      </div>
      
    );
  }
}


ReactDOM.render(<Notification />, document.getElementById('root'));

export default App;
