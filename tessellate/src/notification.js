import React, { Component } from "react";

import ReactDOM from 'react-dom';


class Notification extends Component {
  constructor() {
    super();
    Notification.state = {message: "This is the default message"};
  }
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}






export default Notification;
