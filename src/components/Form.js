import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";
import { Button } from "react-bootstrap";
import Notification from "./Notification";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: "",
      showResult: false,
      data: [],
      success: true,
      showNotification: false,
      message: "",
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
        this.setState({ success: res.data["success"] });
        this.setState({ message: res.data["message"] });
      });
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showComponent = (name) => {
    this.setState({ showNotification: true });
    this.setState({ showResult: true });
  };

  render() {
    const {
      n,
      showResult,
      data,
      success,
      showNotification,
      message,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <br />
          <div>
            <label>Enter n:</label>
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
        {showNotification && <Notification msg={this.state.message} />}
        {showResult && <Result data={this.state.data} />}
      </div>
    );
  }
}

export default Form;
