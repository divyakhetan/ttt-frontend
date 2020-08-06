import React, { Component } from "react";

export class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.word}</td>
        <td>{this.props.item.count}</td>
      </tr>
    );
  }
}

export default Row;
