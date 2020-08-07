import React, { Component } from "react";

export class Notification extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.msg}</h4>
      </div>
    );
  }
}

export default Notification;
