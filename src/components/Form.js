import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";
import { Button } from "react-bootstrap";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: "",
      showResult: false,
      data: [],
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .get("https://tttbackend.herokuapp.com/file/data?n=" + this.state.n)
      .then((res) => {
        this.setState({ data: res.data["data"] });
        console.log(res.data["data"]);
        console.log(this.state.data);
      });
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showComponent = (name) => {
    this.setState({ showResult: true });
  };

  render() {
    const { n, showResult, data } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <br />
          <div>
            <label>Enter n</label>
            <br />
            <input
              type="text"
              name="n"
              value={n}
              onChange={this.onChangeHandler}
            />
          </div>
          <br />
          <div>
            <Button variant="info" type="submit" onClick={this.showComponent}>
              Submit
            </Button>
          </div>
          <br />
        </form>

        {showResult && <Result data={this.state.data} />}
      </div>
    );
  }
}

export default Form;
