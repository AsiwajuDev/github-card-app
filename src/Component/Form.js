import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = { userName: "" };

  //Submit Event
  handleSubmit = async submitEvent => {
    submitEvent.preventDefault();
    //axios
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="App form-group form"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <input
            placeholder="Search Profiles..."
            type="text"
            value={this.state.userName}
            onChange={submitEvent =>
              this.setState({ userName: submitEvent.target.value })
            }
            className="form-control mb-1"
            id="search"
            required
          />
          <button type="submit" className="btn btn-primary mb-3">
            Add Profile
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
