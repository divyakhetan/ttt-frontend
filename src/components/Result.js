import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";
export class Result extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        {/* <div>The top {data.length} frequently occuring words are:</div> */}
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>

            {data.map((item) => (
              <Row item={item} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Result;
